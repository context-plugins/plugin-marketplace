using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Lusha.Core.Models;
using Lusha.Models.Enums;

namespace Lusha.Models;

public record V3CompaniesEnrichRequest
{
    /// <summary>
    /// Company IDs from search results (strings)
    /// </summary>
    [JsonPropertyName("ids")]
    [MinLength(1)]
    [MaxLength(100)]
    public required IReadOnlyList<string> Ids { get; init; }

    /// <summary>
    /// Additional data fields to reveal. Each field is charged separately per result.
    /// - <c>employeesByDepartment</c> — breakdown of employees by department
    /// - <c>employeesByLocation</c> — breakdown of employees by country/state
    /// - <c>employeesBySeniority</c> — breakdown of employees by seniority level
    /// - <c>competitors</c> — list of competitor company IDs
    /// - <c>intent</c> — buyer intent topics
    /// - <c>estimatedAnnualItSpend</c> — estimated annual IT spend. 1 credit per company, charged only when a non-null value is returned.
    /// - <c>monthlyWebsiteTraffic</c> — monthly website traffic and month-over-month change. 1 credit per company, charged only when a non-null value is returned.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reveal")]
    public IReadOnlyList<Reveal1>? Reveal { get; init; }

    /// <summary>
    /// Optional. If provided, these companies are also added to this table (if not already present) and the revealed fields' columns are populated. See the Tables API.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tableId")]
    public string? TableId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
