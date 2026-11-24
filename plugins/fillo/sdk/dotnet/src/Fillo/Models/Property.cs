using System.Collections.Generic;
using System.Text.Json.Serialization;
using Fillo.Core.Models;
using Fillo.Models.Enums;

namespace Fillo.Models;

public record Property
{
    [JsonPropertyName("property")]
    public required string PropertyValue { get; init; }

    [JsonPropertyName("label")]
    public required string Label { get; init; }

    [JsonPropertyName("type")]
    public required TypeEnum Type { get; init; }

    [JsonPropertyName("fieldType")]
    public required string FieldType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("groupName")]
    public string? GroupName { get; init; }

    [JsonPropertyName("options")]
    public required IReadOnlyList<Option> Options { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
