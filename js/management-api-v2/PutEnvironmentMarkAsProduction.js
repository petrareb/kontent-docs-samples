// DocSection: cm_api_v2_mark_environment_as_production
// Tip: Find more about JS/TS SDKs at https://kontent.ai/learn/javascript
// Using ES6 syntax
import { ManagementClient } from '@kentico/kontent-management';

const client = new ManagementClient({
    projectId: '<YOUR_PROJECT_ID>',
    apiKey: '<YOUR_API_KEY>'
});

const response = await client.markEnvironmentAsProduction()
    .withData(
        {
            enable_webhooks: false
        }
    )
    .toPromise();
// EndDocSection
