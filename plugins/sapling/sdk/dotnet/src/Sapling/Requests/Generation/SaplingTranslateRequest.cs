using Sapling.Models.AnyOf;

namespace Sapling.Requests.Generation;

/// <summary>
/// The inputs of the SaplingTranslate operation.
/// </summary>
public sealed record SaplingTranslateRequest
{
    public required ApiV1TranslateRequest2 Body { get; init; }
}
