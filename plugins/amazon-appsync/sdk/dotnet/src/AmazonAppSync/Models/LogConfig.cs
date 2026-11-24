using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;
using AmazonAppSync.Models.Enums;

namespace AmazonAppSync.Models;

public record LogConfig
{
    /// <summary>
    /// The field logging level. Values can be NONE, ERROR, or ALL. NONE: No field-level logs are captured. ERROR: Logs the following information only for the fields that are in error: The error section in the server response. Field-level errors. The generated request/response functions that got resolved for error fields. ALL: The following information is logged for all fields in the query: Field-level tracing information. The generated request/response functions that got resolved for each field.
    /// </summary>
    [JsonPropertyName("fieldLogLevel")]
    public required FieldLogLevel FieldLogLevel { get; init; }

    /// <summary>
    /// The service role that AppSync assumes to publish to CloudWatch logs in your account.
    /// </summary>
    [JsonPropertyName("cloudWatchLogsRoleArn")]
    public required string CloudWatchLogsRoleArn { get; init; }

    /// <summary>
    /// Set to TRUE to exclude sections that contain information such as headers, context, and evaluated mapping templates, regardless of logging level.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludeVerboseContent")]
    public bool? ExcludeVerboseContent { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
