using System.Text.Json.Serialization;
using AmazonVpc.Core.Models;

namespace AmazonVpc.Models;

public record Ipv6CidrBlockState
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public string? State { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
