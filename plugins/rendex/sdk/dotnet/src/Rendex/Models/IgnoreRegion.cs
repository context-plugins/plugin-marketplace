using System.Text.Json.Serialization;
using Rendex.Core.Models;
using Rendex.Core.Validation.Attributes;

namespace Rendex.Models;

public record IgnoreRegion
{
    [JsonPropertyName("x")]
    [Minimum(0.0)]
    public required double X { get; init; }

    [JsonPropertyName("y")]
    [Minimum(0.0)]
    public required double Y { get; init; }

    /// <summary>
    /// Pixels (&gt; 0)
    /// </summary>
    [JsonPropertyName("width")]
    [ExclusiveMinimum(0)]
    public required double Width { get; init; }

    /// <summary>
    /// Pixels (&gt; 0)
    /// </summary>
    [JsonPropertyName("height")]
    [ExclusiveMinimum(0)]
    public required double Height { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
