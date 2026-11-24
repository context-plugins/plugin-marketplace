using System.Collections.Generic;
using System.Text.Json.Serialization;
using NordicFinancialNews.Core.Models;

namespace NordicFinancialNews.Models;

public record ApiV1MetaResponse
{
    [JsonPropertyName("version")]
    public required string Version { get; init; }

    [JsonPropertyName("capabilities")]
    public required IReadOnlyList<string> Capabilities { get; init; }

    [JsonPropertyName("supported_fields")]
    public required SupportedFields SupportedFields { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("search")]
    public Search? Search { get; init; }

    [JsonPropertyName("content_types")]
    public required IReadOnlyList<string> ContentTypes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sectors")]
    public IReadOnlyList<string>? Sectors { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rate_limit_policy")]
    public string? RateLimitPolicy { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("supported_countries")]
    public IReadOnlyList<string>? SupportedCountries { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("supported_scopes")]
    public IReadOnlyList<string>? SupportedScopes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
