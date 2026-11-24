using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

public record Expiration
{
    /// <summary>
    /// Card expiration year
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("year")]
    public string? Year { get; init; }

    /// <summary>
    /// Card expiration month
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("month")]
    public string? Month { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
