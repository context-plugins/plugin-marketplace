using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Divvy.Core.Models;
using Divvy.Models.Enums;

namespace Divvy.Models;

/// <summary>
/// Create a bank account
/// </summary>
public record OrganizationBankAccountCreateRequestDto
{
    /// <summary>
    /// Full name on bank account
    /// </summary>
    [JsonPropertyName("nameOnAccount")]
    [MinLength(1)]
    public required string NameOnAccount { get; init; }

    /// <summary>
    /// Bank routing number. This field is required.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("routingNumber")]
    public string? RoutingNumber { get; init; }

    /// <summary>
    /// Bank account number. This field is required.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("accountNumber")]
    public string? AccountNumber { get; init; }

    [JsonPropertyName("type")]
    public required BankAccountType Type { get; init; }

    [JsonPropertyName("ownerType")]
    public required BankAccountOwnerType OwnerType { get; init; }

    /// <summary>
    /// Bank name. Set this field as a nickname for your bank account.
    /// </summary>
    [JsonPropertyName("bankName")]
    [StringLength(100, MinimumLength = 1)]
    public required string BankName { get; init; }

    /// <summary>
    /// Set as <c>true</c> to enable access to all users with the <c>ADMINISTRATOR</c> user role
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("accessToAdmins")]
    public bool? AccessToAdmins { get; init; }

    /// <summary>
    /// BILL-generated ID of the chart of accounts for the bank account. The value begins with <c>0ca</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("chartOfAccountId")]
    public string? ChartOfAccountId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
