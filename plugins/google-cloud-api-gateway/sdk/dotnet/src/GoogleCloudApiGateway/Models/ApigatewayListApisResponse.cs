using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudApiGateway.Core.Models;

namespace GoogleCloudApiGateway.Models;

/// <summary>
/// Response message for ApiGatewayService.ListApis
/// </summary>
public record ApigatewayListApisResponse
{
    /// <summary>
    /// APIs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apis")]
    public IReadOnlyList<ApigatewayApi>? Apis { get; init; }

    /// <summary>
    /// Locations that could not be reached.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unreachableLocations")]
    public IReadOnlyList<string>? UnreachableLocations { get; init; }

    /// <summary>
    /// Next page token.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
