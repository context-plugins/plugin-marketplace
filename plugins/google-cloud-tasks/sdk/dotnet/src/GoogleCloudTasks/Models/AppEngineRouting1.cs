using System.Text.Json.Serialization;
using GoogleCloudTasks.Core.Models;

namespace GoogleCloudTasks.Models;

/// <summary>
/// Overrides for task-level app_engine_routing. These settings apply only to App Engine tasks in this queue. Http tasks are not affected. If set, <c>app_engine_routing_override</c> is used for all App Engine tasks in the queue, no matter what the setting is for the task-level app_engine_routing.
/// </summary>
public record AppEngineRouting1
{
    /// <summary>
    /// App version. By default, the task is sent to the version which is the default version when the task is attempted. For some queues or tasks which were created using the App Engine Task Queue API, host is not parsable into service, version, and instance. For example, some tasks which were created using the App Engine SDK use a custom domain name; custom domains are not parsed by Cloud Tasks. If host is not parsable, then service, version, and instance are the empty string.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("version")]
    public string? Version { get; init; }

    /// <summary>
    /// App service. By default, the task is sent to the service which is the default service when the task is attempted. For some queues or tasks which were created using the App Engine Task Queue API, host is not parsable into service, version, and instance. For example, some tasks which were created using the App Engine SDK use a custom domain name; custom domains are not parsed by Cloud Tasks. If host is not parsable, then service, version, and instance are the empty string.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("service")]
    public string? Service { get; init; }

    /// <summary>
    /// App instance. By default, the task is sent to an instance which is available when the task is attempted. Requests can only be sent to a specific instance if <see href="https://cloud.google.com/appengine/docs/python/an-overview-of-app-engine?hl=en_US#scaling_types_and_instance_classes">manual scaling is used in App Engine Standard</see>. App Engine Flex does not support instances. For more information, see <see href="https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed">App Engine Standard request routing</see> and <see href="https://cloud.google.com/appengine/docs/flexible/python/how-requests-are-routed">App Engine Flex request routing</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("instance")]
    public string? Instance { get; init; }

    /// <summary>
    /// Output only. The host that the task is sent to. The host is constructed from the domain name of the app associated with the queue's project ID (for example .appspot.com), and the service, version, and instance. Tasks which were created using the App Engine SDK might have a custom domain name. For more information, see <see href="https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed">How Requests are Routed</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("host")]
    public string? Host { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
