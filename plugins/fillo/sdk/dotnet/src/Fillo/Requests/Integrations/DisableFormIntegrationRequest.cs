using Fillo.Models.Enums;

namespace Fillo.Requests.Integrations;

/// <summary>
/// The inputs of the DisableFormIntegration operation.
/// </summary>
public sealed record DisableFormIntegrationRequest
{
    /// <summary>
    /// A form id or slug.
    /// </summary>
    public required string Form { get; init; }

    /// <summary>
    /// google_sheets, notion, slack, or hubspot. Discord destinations are managed with <c>fillo discord</c>.
    /// </summary>
    public required Provider Provider { get; init; }
}
