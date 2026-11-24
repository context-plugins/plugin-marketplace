using System.Collections.Generic;
using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record CompanySignalData
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("companyId")]
    public string? CompanyId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("companyName")]
    public string? CompanyName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("domain")]
    public string? Domain { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("riskNews")]
    public IReadOnlyList<CompanyNewsSignal>? RiskNews { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("commercialActivityNews")]
    public IReadOnlyList<CompanyNewsSignal>? CommercialActivityNews { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("corporateStrategyNews")]
    public IReadOnlyList<CompanyNewsSignal>? CorporateStrategyNews { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("financialEventsNews")]
    public IReadOnlyList<CompanyNewsSignal>? FinancialEventsNews { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("peopleNews")]
    public IReadOnlyList<CompanyNewsSignal>? PeopleNews { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("marketIntelligenceNews")]
    public IReadOnlyList<CompanyNewsSignal>? MarketIntelligenceNews { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("productActivityNews")]
    public IReadOnlyList<CompanyNewsSignal>? ProductActivityNews { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("surgeInHiring")]
    public IReadOnlyList<CompanySurgeInHiringSignal>? SurgeInHiring { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("surgeInHiringByDepartment")]
    public IReadOnlyList<CompanySurgeInHiringByDepartmentSignal>? SurgeInHiringByDepartment { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("surgeInHiringByLocation")]
    public IReadOnlyList<CompanySurgeInHiringByLocationSignal>? SurgeInHiringByLocation { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("websiteTrafficIncrease")]
    public IReadOnlyList<CompanyWebsiteTrafficSignal>? WebsiteTrafficIncrease { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("websiteTrafficDecrease")]
    public IReadOnlyList<CompanyWebsiteTrafficSignal>? WebsiteTrafficDecrease { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("itSpendIncrease")]
    public IReadOnlyList<CompanyItSpendSignal>? ItSpendIncrease { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("itSpendDecrease")]
    public IReadOnlyList<CompanyItSpendSignal>? ItSpendDecrease { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("headcountIncrease1m")]
    public IReadOnlyList<CompanyHeadcountChangeSignal>? HeadcountIncrease1M { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("headcountDecrease1m")]
    public IReadOnlyList<CompanyHeadcountChangeSignal>? HeadcountDecrease1M { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("headcountIncrease3m")]
    public IReadOnlyList<CompanyHeadcountChangeSignal>? HeadcountIncrease3M { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("headcountDecrease3m")]
    public IReadOnlyList<CompanyHeadcountChangeSignal>? HeadcountDecrease3M { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("headcountIncrease6m")]
    public IReadOnlyList<CompanyHeadcountChangeSignal>? HeadcountIncrease6M { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("headcountDecrease6m")]
    public IReadOnlyList<CompanyHeadcountChangeSignal>? HeadcountDecrease6M { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("headcountIncrease12m")]
    public IReadOnlyList<CompanyHeadcountChangeSignal>? HeadcountIncrease12M { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("headcountDecrease12m")]
    public IReadOnlyList<CompanyHeadcountChangeSignal>? HeadcountDecrease12M { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
