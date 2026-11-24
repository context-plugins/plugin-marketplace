using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// The response for ListDatastores
/// </summary>
public record GoogleCloudApigeeV1ListDatastoresResponse
{
    /// <summary>
    /// A list of datastores
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("datastores")]
    public IReadOnlyList<GoogleCloudApigeeV1Datastore>? Datastores { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
