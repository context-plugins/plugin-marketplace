using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;
using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Models;

public record StartEventsDetectionJobRequest
{
    [JsonPropertyName("InputDataConfig")]
    public required InputDataConfig InputDataConfig { get; init; }

    [JsonPropertyName("OutputDataConfig")]
    public required OutputDataConfig OutputDataConfig { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.
    /// </summary>
    [JsonPropertyName("DataAccessRoleArn")]
    public required string DataAccessRoleArn { get; init; }

    /// <summary>
    /// The identifier of the events detection job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("JobName")]
    public string? JobName { get; init; }

    /// <summary>
    /// The language code of the input documents.
    /// </summary>
    [JsonPropertyName("LanguageCode")]
    public required LanguageCode10 LanguageCode { get; init; }

    /// <summary>
    /// An unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ClientRequestToken")]
    public string? ClientRequestToken { get; init; }

    /// <summary>
    /// The types of events to detect in the input documents.
    /// </summary>
    [JsonPropertyName("TargetEventTypes")]
    public required IReadOnlyList<string> TargetEventTypes { get; init; }

    /// <summary>
    /// Tags to associate with the events detection job. A tag is a key-value pair that adds metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
