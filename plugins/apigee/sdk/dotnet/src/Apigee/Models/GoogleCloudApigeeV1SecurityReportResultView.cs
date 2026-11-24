using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// The response for security report result view APIs.
/// </summary>
public record GoogleCloudApigeeV1SecurityReportResultView
{
    /// <summary>
    /// Rows of security report result. Each row is a JSON object. Example: {sum(message_count): 1, developer_app: "(not set)",…}
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rows")]
    public IReadOnlyList<object>? Rows { get; init; }

    /// <summary>
    /// Metadata contains information like metrics, dimenstions etc of the security report.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public GoogleCloudApigeeV1SecurityReportMetadata2? Metadata { get; init; }

    /// <summary>
    /// Error message when there is a failure.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public string? Error { get; init; }

    /// <summary>
    /// State of retrieving ResultView.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public string? State { get; init; }

    /// <summary>
    /// Error code when there is a failure.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("code")]
    public int? Code { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
