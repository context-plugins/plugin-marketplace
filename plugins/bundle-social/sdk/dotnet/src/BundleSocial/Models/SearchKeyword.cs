using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record SearchKeyword
{
    /// <summary>
    /// The lowercase query a customer typed to find the business.
    /// </summary>
    [JsonPropertyName("searchKeyword")]
    public required string SearchKeywordValue { get; init; }

    /// <summary>
    /// Exact number of unique users, when Google discloses it. Null when <c>threshold</c> is returned instead.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public double? Value { get; init; }

    /// <summary>
    /// Returned for low-volume keywords instead of <c>value</c>: the real count is below this number. Ignoring it drops the long tail.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("threshold")]
    public double? Threshold { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
