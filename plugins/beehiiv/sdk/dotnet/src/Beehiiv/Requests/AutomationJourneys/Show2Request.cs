namespace Beehiiv.Requests.AutomationJourneys;

/// <summary>
/// The inputs of the Show2 operation.
/// </summary>
public sealed record Show2Request
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
    /// The prefixed automation journey id
    /// </summary>
    public required string AutomationJourneyId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
