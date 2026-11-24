using Shortcut.Models;

namespace Shortcut.Requests.Integrations;

/// <summary>
/// The inputs of the CreateGenericIntegration operation.
/// </summary>
public sealed record CreateGenericIntegrationRequest
{
    public required CreateGenericIntegration Body { get; init; }
}
