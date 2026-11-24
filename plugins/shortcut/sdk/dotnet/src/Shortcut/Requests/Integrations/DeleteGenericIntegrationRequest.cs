namespace Shortcut.Requests.Integrations;

/// <summary>
/// The inputs of the DeleteGenericIntegration operation.
/// </summary>
public sealed record DeleteGenericIntegrationRequest
{
    public required long IntegrationPublicId { get; init; }
}
