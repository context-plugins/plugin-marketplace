using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// The information related to the service implemented by the plugin developer, used to invoke the plugin's functionality.
/// </summary>
public record GoogleCloudApihubV1HostingService
{
    /// <summary>
    /// Optional. The URI of the service implemented by the plugin developer, used to invoke the plugin's functionality. This information is only required for user defined plugins.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("serviceUri")]
    public string? ServiceUri { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
