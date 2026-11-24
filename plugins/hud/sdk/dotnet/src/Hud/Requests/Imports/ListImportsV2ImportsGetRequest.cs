using Hud.Core.Validation.Attributes;
using Hud.Models.AnyOf;

namespace Hud.Requests.Imports;

/// <summary>
/// The inputs of the ListImportsV2ImportsGet operation.
/// </summary>
public sealed record ListImportsV2ImportsGetRequest
{
    public Format1? Format { get; init; }

    public TasksetId? TasksetId { get; init; }

    [Minimum(1)]
    [Maximum(100)]
    public int Limit { get; init; } = 50;

    [Minimum(0)]
    public int Offset { get; init; } = 0;
}
