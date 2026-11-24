using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect.Models;

public record DescribeTagsRequest
{
    /// <summary>
    /// The Amazon Resource Names (ARNs) of the resources.
    /// </summary>
    [JsonPropertyName("resourceArns")]
    public required IReadOnlyList<string> ResourceArns { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
