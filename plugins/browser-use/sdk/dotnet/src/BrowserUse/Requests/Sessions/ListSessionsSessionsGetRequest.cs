using BrowserUse.Core.Validation.Attributes;
using BrowserUse.Models.AnyOf;

namespace BrowserUse.Requests.Sessions;

/// <summary>
/// The inputs of the ListSessionsSessionsGet operation.
/// </summary>
public sealed record ListSessionsSessionsGetRequest
{
    /// <summary>
    /// Max sessions per page (max 100).
    /// </summary>
    [Minimum(1)]
    [Maximum(100)]
    public int Limit { get; init; } = 20;

    /// <summary>
    /// Keyset cursor from a prior response.
    /// </summary>
    public Cursor? Cursor { get; init; }
}
