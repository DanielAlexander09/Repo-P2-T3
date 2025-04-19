const { initApp } = require('../../src/app');

describe('App', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <div id="content"></div>
        `;
    });

    test('initApp should set content', () => {
        initApp();
        expect(document.getElementById('content').textContent).toBe('Hello CI/CD World!');
    });
});