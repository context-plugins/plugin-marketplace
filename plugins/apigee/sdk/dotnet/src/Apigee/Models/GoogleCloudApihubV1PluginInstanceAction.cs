using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// PluginInstanceAction represents an action which can be executed in the plugin instance.
/// </summary>
public record GoogleCloudApihubV1PluginInstanceAction
{
    /// <summary>
    /// Optional. The time zone for the schedule cron expression. If not provided, UTC will be used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scheduleTimeZone")]
    public string? ScheduleTimeZone { get; init; }

    /// <summary>
    /// Required. This should map to one of the action id specified in actions_config in the plugin.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("actionId")]
    public string? ActionId { get; init; }

    /// <summary>
    /// Optional. The schedule for this plugin instance action. This can only be set if the plugin supports API_HUB_SCHEDULE_TRIGGER mode for this action.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scheduleCronExpression")]
    public string? ScheduleCronExpression { get; init; }

    /// <summary>
    /// Output only. The current state of the plugin action in the plugin instance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State6ApigeeProjectsApi? State { get; init; }

    /// <summary>
    /// Optional. The service account used to publish data. Note, the service account will only be accepted for non-Google Cloud plugins like OPDK.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("serviceAccount")]
    public string? ServiceAccount { get; init; }

    /// <summary>
    /// Optional. This configuration should be provided if the plugin action is publishing data to API hub curate layer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("curationConfig")]
    public GoogleCloudApihubV1CurationConfig2? CurationConfig { get; init; }

    /// <summary>
    /// Optional. The execution information for the plugin instance action done corresponding to an API hub instance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hubInstanceAction")]
    public GoogleCloudApihubV1ExecutionStatus1? HubInstanceAction { get; init; }

    /// <summary>
    /// Output only. The configuration of resources created for a given plugin instance action. Note these will be returned only in case of non-Google Cloud plugins like OPDK.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resourceConfig")]
    public GoogleCloudApihubV1ResourceConfig1? ResourceConfig { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
