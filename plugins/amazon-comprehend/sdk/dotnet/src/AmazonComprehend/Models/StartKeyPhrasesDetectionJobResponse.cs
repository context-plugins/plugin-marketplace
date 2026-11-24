using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;
using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Models;

public record StartKeyPhrasesDetectionJobResponse
{
    /// <summary>
    /// The identifier generated for the job. To get the status of a job, use this identifier with the operation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("JobId")]
    public string? JobId { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the key phrase detection job. It is a unique, fully qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the ARN is as follows: arn::comprehend:::key-phrases-detection-job/ The following is an example job ARN: arn:aws:comprehend:us-west-2:111122223333:key-phrases-detection-job/1234abcd12ab34cd56ef1234567890ab
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("JobArn")]
    public string? JobArn { get; init; }

    /// <summary>
    /// The status of the job. SUBMITTED - The job has been received and is queued for processing. IN_PROGRESS - Amazon Comprehend is processing the job. COMPLETED - The job was successfully completed and the output is available. FAILED - The job did not complete. To get details, use the operation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("JobStatus")]
    public JobStatus19? JobStatus { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
