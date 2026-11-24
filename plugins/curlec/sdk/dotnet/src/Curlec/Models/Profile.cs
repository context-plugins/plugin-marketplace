using System.Text.Json.Serialization;
using Curlec.Core.Models;

namespace Curlec.Models;

public record Profile
{
    /// <summary>
    /// Business category (e.g., healthcare, education, ecommerce).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("category")]
    public string? Category { get; init; }

    /// <summary>
    /// Business subcategory.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subcategory")]
    public string? Subcategory { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("addresses")]
    public Addresses? Addresses { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
