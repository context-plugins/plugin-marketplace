using System.Text.Json.Serialization;
using Apibara.Core.Models;
using Apibara.Models.Enums;

namespace Apibara.Models;

/// <summary>
/// Available seller name and name-based classification. Unknown means the source does not supply enough evidence; damage, title and missing valuations do not establish seller type. Name-based classification is inferred, not a verified source category.
/// </summary>
public record Seller
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public TypeEnum? Type { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name_source")]
    public NameSource? NameSource { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type_source")]
    public TypeSource? TypeSource { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type_is_inferred")]
    public bool? TypeIsInferred { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
