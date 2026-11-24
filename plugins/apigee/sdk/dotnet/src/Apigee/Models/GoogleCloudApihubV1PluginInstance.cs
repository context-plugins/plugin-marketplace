using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// Represents a plugin instance resource in the API Hub. A PluginInstance is a specific instance of a hub plugin with its own configuration, state, and execution details.
/// </summary>
public record GoogleCloudApihubV1PluginInstance
{
    /// <summary>
    /// Optional. The additional information for this plugin instance corresponding to the additional config template of the plugin. This information will be sent to plugin hosting service on each call to plugin hosted service. The key will be the config_variable_template.display_name to uniquely identify the config variable.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additionalConfig")]
    public IReadOnlyDictionary<string, GoogleCloudApihubV1ConfigVariable>? AdditionalConfig { get; init; }

    /// <summary>
    /// Output only. Timestamp indicating when the plugin instance was last updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateTime")]
    public string? UpdateTime { get; init; }

    /// <summary>
    /// Required. The display name for this plugin instance. Max length is 500 characters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    public string? DisplayName { get; init; }

    /// <summary>
    /// Output only. The current state of the plugin instance (e.g., enabled, disabled, provisioning).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State7ApigeeProjectsApi? State { get; init; }

    /// <summary>
    /// Output only. Timestamp indicating when the plugin instance was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public string? CreateTime { get; init; }

    /// <summary>
    /// Required. The action status for the plugin instance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("actions")]
    public IReadOnlyList<GoogleCloudApihubV1PluginInstanceAction>? Actions { get; init; }

    /// <summary>
    /// Optional. The source environment's config present in the gateway instance linked to the plugin instance. The key is the <c>source_environment</c> name from the SourceEnvironment message.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceEnvironmentsConfig")]
    public IReadOnlyDictionary<string, GoogleCloudApihubV1SourceEnvironment>? SourceEnvironmentsConfig { get; init; }

    /// <summary>
    /// Output only. Error message describing the failure, if any, during Create, Delete or ApplyConfig operation corresponding to the plugin instance.This field will only be populated if the plugin instance is in the ERROR or FAILED state.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("errorMessage")]
    public string? ErrorMessage { get; init; }

    /// <summary>
    /// Identifier. The unique name of the plugin instance resource. Format: <c>projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Optional. The source project id of the plugin instance. This will be the id of runtime project in case of Google Cloud based plugins and org id in case of non-Google Cloud based plugins. This field will be a required field for Google provided on-ramp plugins.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceProjectId")]
    public string? SourceProjectId { get; init; }

    /// <summary>
    /// Optional. The authentication information for this plugin instance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("authConfig")]
    public GoogleCloudApihubV1AuthConfig1? AuthConfig { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
