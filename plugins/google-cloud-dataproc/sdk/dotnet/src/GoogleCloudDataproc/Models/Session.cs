using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;
using GoogleCloudDataproc.Models.Enums;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// A representation of a session.
/// </summary>
public record Session
{
    /// <summary>
    /// Optional. The labels to associate with the session. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a session.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("labels")]
    public IReadOnlyDictionary<string, string>? Labels { get; init; }

    /// <summary>
    /// Optional. Spark connect session config.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sparkConnectSession")]
    public object? SparkConnectSession { get; init; }

    /// <summary>
    /// Output only. The time when the session was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public string? CreateTime { get; init; }

    /// <summary>
    /// Output only. Runtime information about session execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("runtimeInfo")]
    public RuntimeInfo1? RuntimeInfo { get; init; }

    /// <summary>
    /// Output only. A session UUID (Unique Universal Identifier). The service generates this value when it creates the session.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uuid")]
    public string? Uuid { get; init; }

    /// <summary>
    /// Output only. A state of the session.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State5? State { get; init; }

    /// <summary>
    /// Identifier. The resource name of the session.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Optional. Runtime configuration for the session execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("runtimeConfig")]
    public RuntimeConfig2? RuntimeConfig { get; init; }

    /// <summary>
    /// Optional. The email address of the user who owns the session.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("user")]
    public string? User { get; init; }

    /// <summary>
    /// Output only. Session state details, such as the failure description if the state is FAILED.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stateMessage")]
    public string? StateMessage { get; init; }

    /// <summary>
    /// Optional. The session template used by the session.Resource names and short template IDs are valid. Examples: * projects/[project_id]/locations/[dataproc_region]/sessionTemplates/[template_id] * [template_id]The template must be in the same project and Dataproc region as the session.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sessionTemplate")]
    public string? SessionTemplate { get; init; }

    /// <summary>
    /// Output only. The email address of the user who created the session.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creator")]
    public string? Creator { get; init; }

    /// <summary>
    /// Optional. Jupyter session config.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("jupyterSession")]
    public JupyterConfig2? JupyterSession { get; init; }

    /// <summary>
    /// Optional. Environment configuration for the session execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("environmentConfig")]
    public EnvironmentConfig2? EnvironmentConfig { get; init; }

    /// <summary>
    /// Output only. Historical state information for the session.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stateHistory")]
    public IReadOnlyList<SessionStateHistory>? StateHistory { get; init; }

    /// <summary>
    /// Output only. The time when the session entered the current state.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stateTime")]
    public string? StateTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
