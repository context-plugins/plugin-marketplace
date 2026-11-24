using Beehiiv.Models;

namespace Beehiiv.Requests.AutomationJourneys;

/// <summary>
/// The inputs of the Create2 operation.
/// </summary>
public sealed record Create2Request
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
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }

    public PublicationsAutomationsJourneysRequest? Body { get; init; }
}
