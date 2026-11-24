using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Optional. Job is a Pig job.
/// </summary>
public record PigJob2
{
    /// <summary>
    /// Optional. The runtime log config for job execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("loggingConfig")]
    public LoggingConfig1? LoggingConfig { get; init; }

    /// <summary>
    /// Optional. Mapping of query variable names to values (equivalent to the Pig command: name=[value]).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scriptVariables")]
    public IReadOnlyDictionary<string, string>? ScriptVariables { get; init; }

    /// <summary>
    /// A list of queries.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("queryList")]
    public QueryList2? QueryList { get; init; }

    /// <summary>
    /// The HCFS URI of the script that contains the Pig queries.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("queryFileUri")]
    public string? QueryFileUri { get; init; }

    /// <summary>
    /// Optional. A mapping of property names to values, used to configure Pig. Properties that conflict with values set by the Dataproc API might be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/pig/conf/pig.properties, and classes in user code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("properties")]
    public IReadOnlyDictionary<string, string>? Properties { get; init; }

    /// <summary>
    /// Optional. Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("continueOnFailure")]
    public bool? ContinueOnFailure { get; init; }

    /// <summary>
    /// Optional. HCFS URIs of jar files to add to the CLASSPATH of the Pig Client and Hadoop MapReduce (MR) tasks. Can contain Pig UDFs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("jarFileUris")]
    public IReadOnlyList<string>? JarFileUris { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
