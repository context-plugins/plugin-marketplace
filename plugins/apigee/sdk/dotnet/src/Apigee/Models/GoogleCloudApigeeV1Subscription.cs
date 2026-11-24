using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Pub/Sub subscription of an environment.
/// </summary>
public record GoogleCloudApigeeV1Subscription
{
    /// <summary>
    /// Full name of the Pub/Sub subcription. Use the following structure in your request: <c>subscription "projects/foo/subscription/bar"</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
