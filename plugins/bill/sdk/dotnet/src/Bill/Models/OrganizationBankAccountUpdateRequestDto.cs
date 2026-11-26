using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Bill.Core.Models;
using Bill.Models.Enums;

namespace Bill.Models;

/// <summary>
/// Update a bank account
/// </summary>
public record OrganizationBankAccountUpdateRequestDto
{
    /// <summary>
    /// Full name on bank account
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nameOnAccount")]
    public string? NameOnAccount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ownerType")]
    public BankAccountOwnerType? OwnerType { get; init; }

    /// <summary>
    /// Bank name. Set this field as a nickname for your bank account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bankName")]
    [MaxLength(100)]
    public string? BankName { get; init; }

    /// <summary>
    /// Set as <c>true</c> to enable access to all users with the <c>ADMINISTRATOR</c> user role
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("accessToAdmins")]
    public bool? AccessToAdmins { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("default")]
    public Default? Default { get; init; }

    /// <summary>
    /// BILL-generated ID of the chart of accounts for the organization bank account. The value begins with <c>0ca</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("chartOfAccountId")]
    public string? ChartOfAccountId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
