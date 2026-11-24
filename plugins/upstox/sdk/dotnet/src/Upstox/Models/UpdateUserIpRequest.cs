using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record UpdateUserIpRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("primary_ip")]
    public string? PrimaryIp { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("secondary_ip")]
    public string? SecondaryIp { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
