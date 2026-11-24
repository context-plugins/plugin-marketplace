using System.Text.Json.Serialization;
using S1.Core.Validation;
using S1.Core.Validation.Attributes;
using S1.Models.Enums;

namespace S1.Models;

public record SitemapRequest
{
    [JsonPropertyName("url")]
    [Format(FormatKind.Uri)]
    public required string Url { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public TypeEnum? Type { get; init; }
}
