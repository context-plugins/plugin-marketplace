using System.Text.Json.Serialization;
using Surfe.Core.Models;
using Surfe.Core.Validation.Attributes;

namespace Surfe.Models;

public record CompanySearchRequest
{
    [JsonPropertyName("limit")]
    [Minimum(1)]
    [Maximum(200)]
    public required int Limit { get; init; }

    /// <summary>
    /// Company-based filters.
    /// </summary>
    [JsonPropertyName("filters")]
    public required CompanyFilters Filters { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pageToken")]
    public string? PageToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
