namespace Upstox.Requests.Ipo;

/// <summary>
/// The inputs of the GetIpoDetails operation.
/// </summary>
public sealed record GetIpoDetailsRequest
{
    /// <summary>
    /// IPO id (slug), as returned in <c>id</c> by the IPO listing API
    /// </summary>
    public required string Id { get; init; }
}
