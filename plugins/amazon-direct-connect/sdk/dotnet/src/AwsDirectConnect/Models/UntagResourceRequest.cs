using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect.Models;

public record UntagResourceRequest
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the resource.
    /// </summary>
    [JsonPropertyName("resourceArn")]
    public required string ResourceArn { get; init; }

    /// <summary>
    /// The tag keys of the tags to remove.
    /// </summary>
    [JsonPropertyName("tagKeys")]
    public required IReadOnlyList<string> TagKeys { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
