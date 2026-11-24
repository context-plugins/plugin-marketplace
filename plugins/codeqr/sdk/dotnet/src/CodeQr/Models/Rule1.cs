using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using CodeQr.Core.Models;
using CodeQr.Models.Enums;

namespace CodeQr.Models;

public record Rule1
{
    [JsonPropertyName("attribute")]
    public required AttributeEnum Attribute { get; init; }

    [JsonPropertyName("operator")]
    public required Operator Operator { get; init; }

    [JsonPropertyName("value")]
    [StringLength(190, MinimumLength = 1)]
    public required string Value { get; init; }

    [JsonPropertyName("url")]
    public required string Url { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
