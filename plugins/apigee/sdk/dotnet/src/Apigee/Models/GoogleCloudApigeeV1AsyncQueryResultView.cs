using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

public record GoogleCloudApigeeV1AsyncQueryResultView
{
    /// <summary>
    /// Error message when there is a failure.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public string? Error { get; init; }

    /// <summary>
    /// Metadata contains information like metrics, dimenstions etc of the AsyncQuery.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public GoogleCloudApigeeV1QueryMetadata3? Metadata { get; init; }

    /// <summary>
    /// Error code when there is a failure.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("code")]
    public int? Code { get; init; }

    /// <summary>
    /// Rows of query result. Each row is a JSON object. Example: {sum(message_count): 1, developer_app: "(not set)",…}
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rows")]
    public IReadOnlyList<object>? Rows { get; init; }

    /// <summary>
    /// State of retrieving ResultView.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public string? State { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
