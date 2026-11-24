using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// SecurityReport saves all the information about the created security report.
/// </summary>
public record GoogleCloudApigeeV1SecurityReport
{
    /// <summary>
    /// Report Definition ID.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reportDefinitionId")]
    public string? ReportDefinitionId { get; init; }

    /// <summary>
    /// ResultFileSize is available only after the query is completed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resultFileSize")]
    public string? ResultFileSize { get; init; }

    /// <summary>
    /// Hostname is available only when query is executed at host level.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("envgroupHostname")]
    public string? EnvgroupHostname { get; init; }

    /// <summary>
    /// Error is set when query fails.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public string? Error { get; init; }

    /// <summary>
    /// Self link of the query. Example: <c>/organizations/myorg/environments/myenv/securityReports/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd</c> or following format if query is running at host level: <c>/organizations/myorg/hostSecurityReports/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("self")]
    public string? Self { get; init; }

    /// <summary>
    /// Display Name specified by the user.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    public string? DisplayName { get; init; }

    /// <summary>
    /// ExecutionTime is available only after the query is completed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("executionTime")]
    public string? ExecutionTime { get; init; }

    /// <summary>
    /// Result is available only after the query is completed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("result")]
    public GoogleCloudApigeeV1SecurityReportResultMetadata1? Result { get; init; }

    /// <summary>
    /// ResultRows is available only after the query is completed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resultRows")]
    public string? ResultRows { get; init; }

    /// <summary>
    /// Contains information like metrics, dimenstions etc of the Security Report.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("queryParams")]
    public GoogleCloudApigeeV1SecurityReportMetadata3? QueryParams { get; init; }

    /// <summary>
    /// Query state could be "enqueued", "running", "completed", "expired" and "failed".
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public string? State { get; init; }

    /// <summary>
    /// Output only. Last updated timestamp for the query.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updated")]
    public string? Updated { get; init; }

    /// <summary>
    /// Creation time of the query.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created")]
    public string? Created { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
