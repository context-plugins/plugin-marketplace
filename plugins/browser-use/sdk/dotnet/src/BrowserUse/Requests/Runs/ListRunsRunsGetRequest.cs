using BrowserUse.Models.AnyOf;

namespace BrowserUse.Requests.Runs;

/// <summary>
/// The inputs of the ListRunsRunsGet operation.
/// </summary>
public sealed record ListRunsRunsGetRequest
{
    public int Limit { get; init; } = 50;

    /// <summary>
    /// Keyset cursor from a prior response.
    /// </summary>
    public Cursor? Cursor { get; init; }

    public Sessionid? SessionId { get; init; }
}
