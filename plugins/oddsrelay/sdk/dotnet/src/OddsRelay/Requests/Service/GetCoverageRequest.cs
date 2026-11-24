namespace OddsRelay.Requests.Service;

/// <summary>
/// The inputs of the GetCoverage operation.
/// </summary>
public sealed record GetCoverageRequest
{
    /// <summary>
    /// ONE lowercase region code (<c>/v2/regions</c> lists yours). Missing means <c>uk</c>: on a data route only when your key covers <c>uk</c>, else 400 <c>region_required</c> naming a code your key has; on discovery and keyless routes always. A comma list, the parameter sent twice or an uppercase code is 400 <c>bad_request</c>; an unknown code, or one with no live bookmaker here, is 404 <c>unknown_region</c>.
    /// </summary>
    public string? Region { get; init; }
}
