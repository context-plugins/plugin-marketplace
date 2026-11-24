using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;

namespace AwsStepFunctions.Models;

public record CreateActivityOutput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) that identifies the created activity.
    /// </summary>
    [JsonPropertyName("activityArn")]
    public required string ActivityArn { get; init; }

    /// <summary>
    /// The date the activity is created.
    /// </summary>
    [JsonPropertyName("creationDate")]
    public required DateTimeOffset CreationDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
