using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;
using AmazonSwf.Models.Enums;

namespace AmazonSwf.Models;

public record ScheduleLambdaFunctionFailedEventAttributes
{
    /// <summary>
    /// The ID provided in the ScheduleLambdaFunction decision that failed.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The name of the Lambda function.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The cause of the failure. To help diagnose issues, use this information to trace back the chain of events leading up to this event. If cause is set to OPERATION_NOT_PERMITTED, the decision failed because it lacked sufficient permissions. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.
    /// </summary>
    [JsonPropertyName("cause")]
    public required Cause13 Cause { get; init; }

    /// <summary>
    /// The ID of the LambdaFunctionCompleted event corresponding to the decision that resulted in scheduling this Lambda task. To help diagnose issues, use this information to trace back the chain of events leading up to this event.
    /// </summary>
    [JsonPropertyName("decisionTaskCompletedEventId")]
    public required int DecisionTaskCompletedEventId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
