## Code organization

### Overview

As we can see in our codebase, we don't have any linting rules that enforce code organization. This can lead to a messy codebase where it's hard to find and maintain code. We need to establish some guidelines for how we organize our code to make it easier to navigate and maintain.

### Acceptace criteria

1. We have a clear and consistent code organization strategy in place.
2. We have linting rules that enforce our code organization strategy.
3. We have documentation that explains our code organization strategy and how to follow it.
4. Before committing code, we run linting and formatting tools to ensure that our code adheres to our organization strategy.

### Notes & examples

You can use recommended configurations. 

### Taska to do:

- [ ] add eslint configuration
- [ ] add prettier configuration
- [ ] prepare commitlint configuration based on github commit message guidelines
- [ ] add precommit hook to run eslint and prettier before committing code
- [ ] add vitest configuration for unit testing
- [ ] add script for running unit tests