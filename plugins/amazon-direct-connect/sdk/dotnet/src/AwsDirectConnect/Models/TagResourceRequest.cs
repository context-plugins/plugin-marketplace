using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect.Models;

public record TagResourceRequest
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the resource.
    /// </summary>
    [JsonPropertyName("resourceArn")]
    public required string ResourceArn { get; init; }

    /// <summary>
    /// The tags to add.
    /// </summary>
    [JsonPropertyName("tags")]
    public required IReadOnlyList<Tag> Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
