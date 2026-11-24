using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Optional. Job is a Trino job.
/// </summary>
public record TrinoJob2
{
    /// <summary>
    /// The HCFS URI of the script that contains SQL queries.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("queryFileUri")]
    public string? QueryFileUri { get; init; }

    /// <summary>
    /// Optional. Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("continueOnFailure")]
    public bool? ContinueOnFailure { get; init; }

    /// <summary>
    /// Optional. The format in which query output will be displayed. See the Trino documentation for supported output formats
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("outputFormat")]
    public string? OutputFormat { get; init; }

    /// <summary>
    /// Optional. Trino client tags to attach to this query
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clientTags")]
    public IReadOnlyList<string>? ClientTags { get; init; }

    /// <summary>
    /// A list of queries.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("queryList")]
    public QueryList2? QueryList { get; init; }

    /// <summary>
    /// Optional. The runtime log config for job execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("loggingConfig")]
    public LoggingConfig1? LoggingConfig { get; init; }

    /// <summary>
    /// Optional. A mapping of property names to values. Used to set Trino session properties (https://trino.io/docs/current/sql/set-session.html) Equivalent to using the --session flag in the Trino CLI
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("properties")]
    public IReadOnlyDictionary<string, string>? Properties { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
