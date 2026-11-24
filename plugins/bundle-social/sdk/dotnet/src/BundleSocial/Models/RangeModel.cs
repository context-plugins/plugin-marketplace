using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record RangeModel
{
    /// <summary>
    /// Month in <c>YYYY-MM</c> format, inclusive.
    /// </summary>
    [JsonPropertyName("startMonth")]
    [RegularExpression("^\\d{4}-(0[1-9]|1[0-2])$")]
    public required string StartMonth { get; init; }

    /// <summary>
    /// Month in <c>YYYY-MM</c> format, inclusive.
    /// </summary>
    [JsonPropertyName("endMonth")]
    [RegularExpression("^\\d{4}-(0[1-9]|1[0-2])$")]
    public required string EndMonth { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
