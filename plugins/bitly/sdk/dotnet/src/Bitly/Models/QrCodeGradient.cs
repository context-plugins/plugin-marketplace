using System.Collections.Generic;
using System.Text.Json.Serialization;
using Bitly.Core.Models;
using Bitly.Models.Enums;

namespace Bitly.Models;

public record QrCodeGradient
{
    /// <summary>
    /// The style of the gradient. Can be either linear or radial.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("style")]
    public Style? Style { get; init; } = Style.NoGradient;

    /// <summary>
    /// The angle by which the gradient will be rotated. Only applies to linear gradients.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("angle")]
    public double? Angle { get; init; }

    /// <summary>
    /// The list of hex colors and their offsets to be used in the gradient.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("colors")]
    public IReadOnlyList<GradientColor>? Colors { get; init; }

    /// <summary>
    /// Ignore gradient mask on corners
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exclude_corners")]
    public bool? ExcludeCorners { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
