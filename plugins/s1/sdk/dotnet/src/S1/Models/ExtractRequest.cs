using System.Collections.Generic;
using System.Text.Json.Serialization;
using S1.Core.Validation;
using S1.Core.Validation.Attributes;

namespace S1.Models;

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
