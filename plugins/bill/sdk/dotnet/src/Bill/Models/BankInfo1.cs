using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

public record BankInfo1
{
    /// <summary>
    /// SWIFT code
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("swiftBIC")]
    public string? SwiftBic { get; init; }

    /// <summary>
    /// Branch name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("branchName")]
    public string? BranchName { get; init; }

    /// <summary>
    /// Country ISO code
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("countryISO")]
    public string? CountryIso { get; init; }

    /// <summary>
    /// National bank code
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nationalBankCode")]
    public string? NationalBankCode { get; init; }

    /// <summary>
    /// Bank institution name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("institutionName")]
    public string? InstitutionName { get; init; }

    /// <summary>
    /// Primary key
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("primaryKey")]
    public string? PrimaryKey { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("address")]
    public Address1BillV3VendorsApi? Address { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
