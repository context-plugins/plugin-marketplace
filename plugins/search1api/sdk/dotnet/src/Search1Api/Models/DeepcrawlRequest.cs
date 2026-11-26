using System.Text.Json.Serialization;
using Search1Api.Core.Validation;
using Search1Api.Core.Validation.Attributes;
using Search1Api.Models.Enums;

namespace Search1Api.Models;

public record DeepcrawlRequest
{
    [JsonPropertyName("url")]
    [Format(FormatKind.Uri)]
    public required string Url { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public TypeEnum? Type { get; init; }
}
