using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonFreeRtos.Core.Models;

namespace AmazonFreeRtos.Models;

public record TagsRequest
{
    [JsonPropertyName("tags")]
    public required IReadOnlyDictionary<string, string> Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
