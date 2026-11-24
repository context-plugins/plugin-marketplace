using Sapling.Models.AnyOf;

namespace Sapling.Requests.Analysis;

/// <summary>
/// The inputs of the SaplingExtract operation.
/// </summary>
public sealed record SaplingExtractRequest
{
    public required ApiV1ExtractRequest2 Body { get; init; }
}
