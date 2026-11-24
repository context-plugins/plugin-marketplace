using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using S1.Core.Models;
using S1.Core.Validation;
using S1.Core.Validation.Attributes;

namespace S1.Models;

public record CrawlRequest
{
    [JsonPropertyName("url")]
    [MinLength(1)]
    [Format(FormatKind.Uri)]
    public required string Url { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enableFallback")]
    public bool? EnableFallback { get; init; } = true;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
