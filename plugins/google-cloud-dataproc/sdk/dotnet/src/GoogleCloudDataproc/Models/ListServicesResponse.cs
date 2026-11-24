using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Response message for DataprocMetastore.ListServices.
/// </summary>
public record ListServicesResponse
{
    /// <summary>
    /// The services in the specified location.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("services")]
    public IReadOnlyList<Service>? Services { get; init; }

    /// <summary>
    /// Locations that could not be reached.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unreachable")]
    public IReadOnlyList<string>? Unreachable { get; init; }

    /// <summary>
    /// A token that can be sent as page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
