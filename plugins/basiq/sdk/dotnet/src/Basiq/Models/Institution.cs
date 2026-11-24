using System.Text.Json.Serialization;
using Basiq.Core.Models;
using Basiq.Models.Enums;

namespace Basiq.Models;

/// <summary>
/// ConnectorInstitutionResource connector Institution  resource type
/// </summary>
public record Institution
{
    /// <summary>
    /// Institution type identifier
    /// Bank BankInstitutionType  BankInstitutionType institution type identifier for Banks
    /// Bank (Foreign) BankForeignInstitutionType BankForeignInstitutionType institution type identifier for Foreign banks
    /// Test Bank TestBankInstitutionType  TestBankInstitutionType institution type identifier for Test banks
    /// Credit Union CreditUnionInstitutionType  CreditUnionInstitutionType institution type identifier for Credit union institutions
    /// Financial Services FinancialServicesInstitutionType FinancialServicesInstitutionType institution type identifier for Financial service institutions
    /// Superannuation SuperannuationInstitutionType SuperannuationInstitutionType institution type identifier for Superannuation institutions
    /// Building Society BuildingSociety  BuildingSociety institution type identifier for Building Society institutions
    /// Government Government  Government institution type identifier for Government institutions
    /// </summary>
    [JsonPropertyName("type")]
    public required TypePlatformConnectorsApi Type { get; init; }

    /// <summary>
    /// Institution name
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Institution short name
    /// </summary>
    [JsonPropertyName("shortName")]
    public required string ShortName { get; init; }

    /// <summary>
    /// Institution tier identifier
    /// 1 TierOne  TierOne tier identifier for tier1 institution
    /// 2 TierTwo  TierTwo tier identifier for tier2 institution
    /// 3 TierThree  TierThree tier identifier for tier3 institution
    /// 4 TierFour  TierFour tier identifier for tier4 institution
    /// </summary>
    [JsonPropertyName("tier")]
    public required TierPlatformConnectorsApi Tier { get; init; }

    /// <summary>
    /// Institution country name
    /// </summary>
    [JsonPropertyName("country")]
    public required string Country { get; init; }

    /// <summary>
    /// A link for Data Holder (where available) to a page explaining CDR data sharing process.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cdrFAQ")]
    public string? CdrFaq { get; init; }

    /// <summary>
    /// The email address for CDR-related inquiries.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cdrEmail")]
    public string? CdrEmail { get; init; }

    /// <summary>
    /// The URL to the CDR policy document detailing the institution's data practices and consumer rights.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cdrPolicy")]
    public string? CdrPolicy { get; init; }

    /// <summary>
    /// A unique identifier assigned to the CDR institution by the CDR program.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cdrProviderNumber")]
    public string? CdrProviderNumber { get; init; }

    /// <summary>
    /// ABN for the Data Holder ( only available in openbanking ).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("abn")]
    public string? Abn { get; init; }

    /// <summary>
    /// ACN for the Data Holder ( only available in openbanking ).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("acn")]
    public string? Acn { get; init; }

    /// <summary>
    /// Institution logo resource type
    /// </summary>
    [JsonPropertyName("logo")]
    public required Logo Logo { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
