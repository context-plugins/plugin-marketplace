using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

public record GoogleCloudApigeeV1AsyncQuery
{
    /// <summary>
    /// ResultRows is available only after the query is completed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resultRows")]
    public string? ResultRows { get; init; }

    /// <summary>
    /// Contains information like metrics, dimenstions etc of the AsyncQuery.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("queryParams")]
    public GoogleCloudApigeeV1QueryMetadata1? QueryParams { get; init; }

    /// <summary>
    /// ResultFileSize is available only after the query is completed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resultFileSize")]
    public string? ResultFileSize { get; init; }

    /// <summary>
    /// Self link of the query. Example: <c>/organizations/myorg/environments/myenv/queries/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd</c> or following format if query is running at host level: <c>/organizations/myorg/hostQueries/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("self")]
    public string? Self { get; init; }

    /// <summary>
    /// Query state could be "enqueued", "running", "completed", "failed".
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public string? State { get; init; }

    /// <summary>
    /// Hostname is available only when query is executed at host level.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("envgroupHostname")]
    public string? EnvgroupHostname { get; init; }

    /// <summary>
    /// Asynchronous Report ID.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reportDefinitionId")]
    public string? ReportDefinitionId { get; init; }

    /// <summary>
    /// Error is set when query fails.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public string? Error { get; init; }

    /// <summary>
    /// Asynchronous Query Name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Result is available only after the query is completed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("result")]
    public GoogleCloudApigeeV1AsyncQueryResult1? Result { get; init; }

    /// <summary>
    /// ExecutionTime is available only after the query is completed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("executionTime")]
    public string? ExecutionTime { get; init; }

    /// <summary>
    /// Creation time of the query.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created")]
    public string? Created { get; init; }

    /// <summary>
    /// Last updated timestamp for the query.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updated")]
    public string? Updated { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
