using System.Text.Json.Serialization;
using Surfe.Core.Models;
using Surfe.Core.Validation.Attributes;

namespace Surfe.Models;

public record PeopleSearchRequest
{
    /// <summary>
    /// Maximum results per page.
    /// </summary>
    [JsonPropertyName("limit")]
    [Minimum(1)]
    [Maximum(200)]
    public required int Limit { get; init; }

    /// <summary>
    /// Person-based filters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("people")]
    public PeopleFilters? People { get; init; }

    /// <summary>
    /// Company-based filters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("companies")]
    public CompanyFilters? Companies { get; init; }

    /// <summary>
    /// Maximum results returned per company.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("peoplePerCompany")]
    [Minimum(1)]
    [Maximum(5)]
    public int? PeoplePerCompany { get; init; }

    /// <summary>
    /// Pagination token from a previous response.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pageToken")]
    public string? PageToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
