using System.Text.Json.Serialization;
using Perigon.Core.Models;
using Perigon.Models.Enums;

namespace Perigon.Models;

public record ContactPointRequestBody
{
    [JsonPropertyName("type")]
    public required Type1 Type { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    public string? Email { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("webhook")]
    public string? Webhook { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
