using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;

namespace AwsStepFunctions.Models;

public record CloudWatchLogsLogGroup
{
    /// <summary>
    /// The ARN of the the CloudWatch log group to which you want your logs emitted to. The ARN must end with :*
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("logGroupArn")]
    public string? LogGroupArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
