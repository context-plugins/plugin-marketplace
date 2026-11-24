using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudEventarc.Core.Models;

namespace GoogleCloudEventarc.Models;

/// <summary>
/// A representation of the event type resource.
/// </summary>
public record EventType
{
    /// <summary>
    /// Output only. URI for the event schema. For example "https://github.com/googleapis/google-cloudevents/blob/master/proto/google/events/cloud/storage/v1/events.proto"
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("eventSchemaUri")]
    public string? EventSchemaUri { get; init; }

    /// <summary>
    /// Output only. Filtering attributes for the event type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filteringAttributes")]
    public IReadOnlyList<FilteringAttribute>? FilteringAttributes { get; init; }

    /// <summary>
    /// Output only. Human friendly description of what the event type is about. For example "Bucket created in Cloud Storage".
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Output only. The full name of the event type (for example, "google.cloud.storage.object.v1.finalized"). In the form of {provider-specific-prefix}.{resource}.{version}.{verb}. Types MUST be versioned and event schemas are guaranteed to remain backward compatible within one version. Note that event type versions and API versions do not need to match.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public string? Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
