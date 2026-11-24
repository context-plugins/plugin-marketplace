using Beehiiv.Models.Enums;

namespace Beehiiv.Requests.AutomationJourneys;

/// <summary>
/// The inputs of the Index5 operation.
/// </summary>
public sealed record Index5Request
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
    /// Optionally filter the results by the automation journey's status.
    /// </summary>
    public AutomationJourneysGetRequestStatus Status { get; init; } = AutomationJourneysGetRequestStatus.All;

    /// <summary>
    /// A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10.
    /// </summary>
    public int? Limit { get; init; }

    /// <summary>
    /// Pagination returns the results in pages. Each page contains the number of results specified by the <c>limit</c> (default: 10).
    /// </summary>
    public int? Page { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
