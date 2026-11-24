namespace BrowserUse.Requests.Integrations;

/// <summary>
/// The inputs of the DisconnectIntegrationIntegrationsProviderDelete operation.
/// </summary>
public sealed record DisconnectIntegrationIntegrationsProviderDeleteRequest
{
    public required string Provider { get; init; }
}
