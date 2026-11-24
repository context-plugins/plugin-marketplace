using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;

namespace AmazonAppSync.Models;

public record AppSyncRuntime
{
    /// <summary>
    /// The name of the runtime to use. Currently, the only allowed value is APPSYNC_JS.
    /// </summary>
    [JsonPropertyName("name")]
    public string Name { get; } = "APPSYNC_JS";

    /// <summary>
    /// The version of the runtime to use. Currently, the only allowed version is 1.0.0.
    /// </summary>
    [JsonPropertyName("runtimeVersion")]
    public required string RuntimeVersion { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
