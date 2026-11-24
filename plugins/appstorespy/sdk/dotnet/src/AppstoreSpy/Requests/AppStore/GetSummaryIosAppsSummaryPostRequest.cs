using AppstoreSpy.Models;

namespace AppstoreSpy.Requests.AppStore;

/// <summary>
/// The inputs of the GetSummaryIosAppsSummaryPost operation.
/// </summary>
public sealed record GetSummaryIosAppsSummaryPostRequest
{
    public required IosSummarySearchBody Body { get; init; }
}
