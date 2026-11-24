using Sapling.Models;

namespace Sapling.Requests.Analysis;

/// <summary>
/// The inputs of the SaplingSeo operation.
/// </summary>
public sealed record SaplingSeoRequest
{
    public required ApiV1SeoRequest Body { get; init; }
}
