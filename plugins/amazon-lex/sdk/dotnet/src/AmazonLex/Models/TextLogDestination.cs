using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record TextLogDestination
{
    [JsonPropertyName("cloudWatch")]
    public required CloudWatchLogGroupLogDestination CloudWatch { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
