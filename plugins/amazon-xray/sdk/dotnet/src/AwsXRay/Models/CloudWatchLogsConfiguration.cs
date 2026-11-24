using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record CloudWatchLogsConfiguration
{
    /// <summary>
    /// The ARN of an AWS Key Management Service (AWS KMS) key that you create and manage, in the same account and Region, used to encrypt the aws/spans log group. Key IDs and alias ARNs are not supported. X-Ray applies the key only when it creates aws/spans. If the account already has an aws/spans log group, X-Ray fails the request with an InvalidRequestException and does not change the log group. To enable Transaction Search with the existing log group as it is, call UpdateTraceSegmentDestination again without SpansLogGroupKmsKeyId. To set or change the key of the existing log group, use the CloudWa
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SpansLogGroupKmsKeyId")]
    public string? SpansLogGroupKmsKeyId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
