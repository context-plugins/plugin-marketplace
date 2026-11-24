namespace BrowserUse.Requests.Integrations;

/// <summary>
/// The inputs of the GetConnectionStatusIntegrationsProviderStatusGet operation.
/// </summary>
public sealed record GetConnectionStatusIntegrationsProviderStatusGetRequest
{
    public required string Provider { get; init; }
}
