using System.Text.Json.Serialization;
using GoogleCloudTasks.Core.Models;

namespace GoogleCloudTasks.Models;

/// <summary>
/// App Engine Routing. Defines routing characteristics specific to App Engine - service, version, and instance. For more information about services, versions, and instances see <see href="https://cloud.google.com/appengine/docs/python/an-overview-of-app-engine">An Overview of App Engine</see>, <see href="https://cloud.google.com/appengine/docs/python/microservices-on-app-engine">Microservices Architecture on Google App Engine</see>, <see href="https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed">App Engine Standard request routing</see>, and <see href="https://cloud.google.com/appengine/docs/flexible/python/how-requests-are-routed">App Engine Flex request routing</see>. Using AppEngineRouting requires <see href="https://cloud.google.com/appengine/docs/admin-api/access-control"><c>appengine.applications.get</c></see> Google IAM permission for the project and the following scope: <c>https://www.googleapis.com/auth/cloud-platform</c>
/// </summary>
public record AppEngineRouting
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
