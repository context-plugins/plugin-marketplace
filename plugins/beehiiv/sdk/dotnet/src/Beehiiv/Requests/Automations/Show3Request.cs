using Beehiiv.Models.Enums;

namespace Beehiiv.Requests.Automations;

/// <summary>
/// The inputs of the Show3 operation.
/// </summary>
public sealed record Show3Request
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// The prefixed ID of the automation object
    /// </summary>
    public required string AutomationId { get; init; }

    /// <summary>
    /// Optional list of expandable objects.
    /// </summary>
    public AutomationsGetRequestExpandItem? Expand { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
