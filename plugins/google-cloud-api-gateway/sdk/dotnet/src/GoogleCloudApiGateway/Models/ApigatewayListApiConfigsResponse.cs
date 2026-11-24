using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudApiGateway.Core.Models;

namespace GoogleCloudApiGateway.Models;

/// <summary>
/// Response message for ApiGatewayService.ListApiConfigs
/// </summary>
public record ApigatewayListApiConfigsResponse
{
    /// <summary>
    /// API Configs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiConfigs")]
    public IReadOnlyList<ApigatewayApiConfig>? ApiConfigs { get; init; }

    /// <summary>
    /// Next page token.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    /// <summary>
    /// Locations that could not be reached.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unreachableLocations")]
    public IReadOnlyList<string>? UnreachableLocations { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
