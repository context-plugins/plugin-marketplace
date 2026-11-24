using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// A plugin resource in the API Hub.
/// </summary>
public record GoogleCloudApihubV1Plugin
{
    /// <summary>
    /// Optional. This field is optional. It is used to notify the plugin hosting service for any lifecycle changes of the plugin instance and trigger execution of plugin instance actions in case of API hub managed actions. This field should be provided if the plugin instance lifecycle of the developed plugin needs to be managed from API hub. Also, in this case the plugin hosting service interface needs to be implemented. This field should not be provided if the plugin wants to manage plugin instance lifecycle events outside of hub interface and use plugin framework for only registering of plugin and plugin instances to capture the source of data into hub. Note, in this case the plugin hosting service interface is not required to be implemented. Also, the plugin instance lifecycle actions will be disabled from API hub's UI.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hostingService")]
    public GoogleCloudApihubV1HostingService2? HostingService { get; init; }

    /// <summary>
    /// Required. The display name of the plugin. Max length is 500 characters (Unicode code points).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    public string? DisplayName { get; init; }

    /// <summary>
    /// Optional. The configuration template for the plugin.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("configTemplate")]
    public GoogleCloudApihubV1ConfigTemplate2? ConfigTemplate { get; init; }

    /// <summary>
    /// Optional. The plugin description. Max length is 500000 characters (Unicode code points).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Optional. The configuration of actions supported by the plugin. <b>REQUIRED</b>: This field must be provided when creating or updating a Plugin. The server will reject requests if this field is missing.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("actionsConfig")]
    public IReadOnlyList<GoogleCloudApihubV1PluginActionConfig>? ActionsConfig { get; init; }

    /// <summary>
    /// Output only. The type of the plugin, indicating whether it is 'SYSTEM_OWNED' or 'USER_OWNED'.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ownershipType")]
    public OwnershipType? OwnershipType { get; init; }

    /// <summary>
    /// Optional. The category of the plugin, identifying its primary category or purpose. This field is required for all plugins.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pluginCategory")]
    public PluginCategory? PluginCategory { get; init; }

    /// <summary>
    /// Optional. The documentation of the plugin, that explains how to set up and use the plugin.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("documentation")]
    public GoogleCloudApihubV1Documentation5? Documentation { get; init; }

    /// <summary>
    /// Output only. Represents the state of the plugin. Note this field will not be set for plugins developed via plugin framework as the state will be managed at plugin instance level.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State3ApigeeProjectsApi? State { get; init; }

    /// <summary>
    /// Output only. Timestamp indicating when the plugin was last updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateTime")]
    public string? UpdateTime { get; init; }

    /// <summary>
    /// Identifier. The name of the plugin. Format: <c>projects/{project}/locations/{location}/plugins/{plugin}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Output only. Timestamp indicating when the plugin was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public string? CreateTime { get; init; }

    /// <summary>
    /// Optional. The type of the gateway.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gatewayType")]
    public GatewayTypeApigeeProjectsApi? GatewayType { get; init; }

    /// <summary>
    /// Optional. The type of the API. This maps to the following system defined attribute: <c>projects/{project}/locations/{location}/attributes/system-plugin-type</c> attribute. The number of allowed values for this attribute will be based on the cardinality of the attribute. The same can be retrieved via GetAttribute API. All values should be from the list of allowed values defined for the attribute. Note this field is not required for plugins developed via plugin framework.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public GoogleCloudApihubV1AttributeValues19? Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
