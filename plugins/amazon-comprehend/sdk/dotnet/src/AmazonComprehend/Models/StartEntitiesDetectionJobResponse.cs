using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;
using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Models;

public record StartEntitiesDetectionJobResponse
{
    /// <summary>
    /// The identifier generated for the job. To get the status of job, use this identifier with the operation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("JobId")]
    public string? JobId { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the entities detection job. It is a unique, fully qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the ARN is as follows: arn::comprehend:::entities-detection-job/ The following is an example job ARN: arn:aws:comprehend:us-west-2:111122223333:entities-detection-job/1234abcd12ab34cd56ef1234567890ab
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("JobArn")]
    public string? JobArn { get; init; }

    /// <summary>
    /// The status of the job. SUBMITTED - The job has been received and is queued for processing. IN_PROGRESS - Amazon Comprehend is processing the job. COMPLETED - The job was successfully completed and the output is available. FAILED - The job did not complete. To get details, use the operation. STOP_REQUESTED - Amazon Comprehend has received a stop request for the job and is processing the request. STOPPED - The job was successfully stopped without completing.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("JobStatus")]
    public JobStatus20? JobStatus { get; init; }

    /// <summary>
    /// The ARN of the custom entity recognition model.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EntityRecognizerArn")]
    public string? EntityRecognizerArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
