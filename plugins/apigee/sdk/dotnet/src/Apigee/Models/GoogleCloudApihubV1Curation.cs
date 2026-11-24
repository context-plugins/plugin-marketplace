using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// A curation resource in the API Hub.
/// </summary>
public record GoogleCloudApihubV1Curation
{
    /// <summary>
    /// Output only. Error message describing the failure, if any, during the last execution of the curation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastExecutionErrorMessage")]
    public string? LastExecutionErrorMessage { get; init; }

    /// <summary>
    /// Output only. The last execution state of the curation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastExecutionState")]
    public LastExecutionState? LastExecutionState { get; init; }

    /// <summary>
    /// Output only. The error code of the last execution of the curation. The error code is populated only when the last execution state is failed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastExecutionErrorCode")]
    public LastExecutionErrorCode? LastExecutionErrorCode { get; init; }

    /// <summary>
    /// Identifier. The name of the curation. Format: <c>projects/{project}/locations/{location}/curations/{curation}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Required. The display name of the curation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    public string? DisplayName { get; init; }

    /// <summary>
    /// Required. The endpoint to be triggered for curation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endpoint")]
    public GoogleCloudApihubV1Endpoint1? Endpoint { get; init; }

    /// <summary>
    /// Output only. The time at which the curation was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public string? CreateTime { get; init; }

    /// <summary>
    /// Output only. The plugin instances and associated actions that are using the curation. Note: A particular curation could be used by multiple plugin instances or multiple actions in a plugin instance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pluginInstanceActions")]
    public IReadOnlyList<GoogleCloudApihubV1PluginInstanceActionId>? PluginInstanceActions { get; init; }

    /// <summary>
    /// Output only. The time at which the curation was last updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateTime")]
    public string? UpdateTime { get; init; }

    /// <summary>
    /// Optional. The description of the curation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
