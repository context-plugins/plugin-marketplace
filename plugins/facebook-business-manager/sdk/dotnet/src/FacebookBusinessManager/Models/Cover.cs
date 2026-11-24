using System.Text.Json.Serialization;
using FacebookBusinessManager.Core.Models;
using FacebookBusinessManager.Core.Validation;
using FacebookBusinessManager.Core.Validation.Attributes;

namespace FacebookBusinessManager.Models;

/// <summary>
/// The Page cover photo
/// </summary>
public record Cover
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source")]
    [Format(FormatKind.Uri)]
    public string? Source { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
