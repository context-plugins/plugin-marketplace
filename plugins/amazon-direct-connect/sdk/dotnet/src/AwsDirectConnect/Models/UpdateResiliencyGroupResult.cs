using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect.Models;

public record UpdateResiliencyGroupResult
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resiliencyGroup")]
    public ResiliencyGroup? ResiliencyGroup { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
