namespace BrowserUse.Requests.Integrations;

/// <summary>
/// The inputs of the AuthorizeIntegrationIntegrationsProviderAuthorizePost operation.
/// </summary>
public sealed record AuthorizeIntegrationIntegrationsProviderAuthorizePostRequest
{
    public required string Provider { get; init; }
}
