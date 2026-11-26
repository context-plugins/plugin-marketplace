using System.Collections.Generic;
using System.Text.Json.Serialization;
using Search1Api.Core.Validation;
using Search1Api.Core.Validation.Attributes;

namespace Search1Api.Models;

public record ExtractRequest
{
    [JsonPropertyName("url")]
    [Format(FormatKind.Uri)]
    public required string Url { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("prompt")]
    public string? Prompt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("response_format")]
    public IReadOnlyDictionary<string, object>? ResponseFormat { get; init; }
}
