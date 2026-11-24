using System.Collections.Generic;
using System.Text.Json.Serialization;
using BrowserUse.Core.Models;

namespace BrowserUse.Models;

/// <summary>
/// Paginated response for integrations list.
/// </summary>
public record IntegrationListResponse
{
    [JsonPropertyName("integrations")]
    public required IReadOnlyList<IntegrationResponse> Integrations { get; init; }

    [JsonPropertyName("total")]
    public required int Total { get; init; }

    [JsonPropertyName("limit")]
    public required int Limit { get; init; }

    [JsonPropertyName("offset")]
    public required int Offset { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
