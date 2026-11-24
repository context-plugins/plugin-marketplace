using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// The ListAddons method's response.
/// </summary>
public record GoogleCloudApihubV1ListAddonsResponse
{
    /// <summary>
    /// The list of addons.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("addons")]
    public IReadOnlyList<GoogleCloudApihubV1Addon>? Addons { get; init; }

    /// <summary>
    /// A token to retrieve the next page of results, or empty if there are no more results in the list.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
