// Fix for enhanced-resolve missing memoize module
const fs = require('fs');
const path = require('path');

const enhancedResolvePath = path.join(__dirname, 'node_modules', 'enhanced-resolve');
const utilPath = path.join(enhancedResolvePath, 'lib', 'util');
const memoizePath = path.join(utilPath, 'memoize.js');

// Create util directory if it doesn't exist
if (!fs.existsSync(utilPath)) {
    fs.mkdirSync(utilPath, { recursive: true });
}

// Create memoize.js if it doesn't exist
if (!fs.existsSync(memoizePath)) {
    const memoizeContent = `
"use strict";

module.exports = function memoize(fn) {
    let cache;
    return function memoized() {
        if (cache === undefined) {
            cache = fn();
        }
        return cache;
    };
};
`;
    fs.writeFileSync(memoizePath, memoizeContent);
    console.log('Fixed enhanced-resolve memoize module');
} else {
    console.log('enhanced-resolve memoize module already exists');
}