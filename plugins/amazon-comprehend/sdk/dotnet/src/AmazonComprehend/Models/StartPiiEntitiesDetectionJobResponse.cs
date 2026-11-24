using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;
using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Models;

public record StartPiiEntitiesDetectionJobResponse
{
    /// <summary>
    /// The identifier generated for the job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("JobId")]
    public string? JobId { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the PII entity detection job. It is a unique, fully qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The format of the ARN is as follows: arn::comprehend:::pii-entities-detection-job/ The following is an example job ARN: arn:aws:comprehend:us-west-2:111122223333:pii-entities-detection-job/1234abcd12ab34cd56ef1234567890ab
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("JobArn")]
    public string? JobArn { get; init; }

    /// <summary>
    /// The status of the job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("JobStatus")]
    public JobStatus23? JobStatus { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
