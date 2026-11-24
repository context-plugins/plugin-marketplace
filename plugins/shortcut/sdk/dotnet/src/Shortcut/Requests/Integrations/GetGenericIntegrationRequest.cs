namespace Shortcut.Requests.Integrations;

/// <summary>
/// The inputs of the GetGenericIntegration operation.
/// </summary>
public sealed record GetGenericIntegrationRequest
{
    public required long IntegrationPublicId { get; init; }
}
