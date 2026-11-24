using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;

namespace AwsStepFunctions.Models;

public record TagResourceInput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) for the Step Functions state machine or activity.
    /// </summary>
    [JsonPropertyName("resourceArn")]
    public required string ResourceArn { get; init; }

    /// <summary>
    /// The list of tags to add to a resource. Tags may only contain Unicode letters, digits, white space, or these symbols: _ . : / = + - @.
    /// </summary>
    [JsonPropertyName("tags")]
    public required IReadOnlyList<Tag> Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
