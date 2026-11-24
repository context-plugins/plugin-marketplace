using System.Text.Json.Serialization;
using NordicFinancialNews.Core.Models;

namespace NordicFinancialNews.Models;

/// <summary>
/// Official company registry data from Nordic registries (e.g. Bolagsverket, PRH). Null if no registry data exists.
/// </summary>
public record Registry
{
    /// <summary>
    /// Name of the official registry
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source")]
    public string? Source { get; init; }

    /// <summary>
    /// Official registered company name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("registered_name")]
    public string? RegisteredName { get; init; }

    /// <summary>
    /// Legal form of the company
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("company_form")]
    public string? CompanyForm { get; init; }

    /// <summary>
    /// Registered city
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("city")]
    public string? City { get; init; }

    /// <summary>
    /// Founding or registration date
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("founded")]
    public string? Founded { get; init; }

    /// <summary>
    /// Number of employees
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("employees")]
    public int? Employees { get; init; }

    /// <summary>
    /// Industry classification from registry
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("industry")]
    public string? Industry { get; init; }

    /// <summary>
    /// Whether the company is in bankruptcy proceedings
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bankruptcy")]
    public bool? Bankruptcy { get; init; }

    /// <summary>
    /// Whether the company is under liquidation
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("under_liquidation")]
    public bool? UnderLiquidation { get; init; }

    /// <summary>
    /// Registered share capital
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("share_capital")]
    public ShareCapital? ShareCapital { get; init; }

    /// <summary>
    /// Institutional sector classification
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("institutional_sector")]
    public string? InstitutionalSector { get; init; }

    /// <summary>
    /// Date the company was deregistered, if applicable
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deregistered_at")]
    public string? DeregisteredAt { get; init; }

    /// <summary>
    /// Reason for deregistration
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deregistration_reason")]
    public string? DeregistrationReason { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
