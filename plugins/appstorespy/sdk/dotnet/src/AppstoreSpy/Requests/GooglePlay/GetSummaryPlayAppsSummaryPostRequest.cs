using AppstoreSpy.Models;

namespace AppstoreSpy.Requests.GooglePlay;

/// <summary>
/// The inputs of the GetSummaryPlayAppsSummaryPost operation.
/// </summary>
public sealed record GetSummaryPlayAppsSummaryPostRequest
{
    public required SummarySearchBody Body { get; init; }
}
