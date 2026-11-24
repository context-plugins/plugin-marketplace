using System.Text.Json.Serialization;
using Instagram.Core.Models;
using Instagram.Models.Enums;

namespace Instagram.Models;

public record ResponseInstagramGraphPublishingApi
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status_code")]
    public StatusCode? StatusCode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
