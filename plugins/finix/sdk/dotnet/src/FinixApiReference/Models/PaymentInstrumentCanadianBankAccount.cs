using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

public record PaymentInstrumentCanadianBankAccount
{
    /// <summary>
    /// The bank account number (no dashes in between numbers). Canadian bank account numbers cannot exceed 15 characters.
    /// </summary>
    [JsonPropertyName("account_number")]
    public required string AccountNumber { get; init; }

    /// <summary>
    /// The type of bank account.
    /// </summary>
    [JsonPropertyName("account_type")]
    public required AccountType2 AccountType { get; init; }

    /// <summary>
    /// The 3-letter country code.
    /// </summary>
    [JsonPropertyName("country")]
    public string Country { get; } = "CAN";

    /// <summary>
    /// The ISO 4217 3-letter currency code.
    /// </summary>
    [JsonPropertyName("currency")]
    public string Currency { get; } = "CAD";

    /// <summary>
    /// The ID of the <c>Identity</c> used to create the <c>Payment Instrument</c> resource.
    /// </summary>
    [JsonPropertyName("identity")]
    public required string Identity { get; init; }

    /// <summary>
    /// Canadian bank identifier (EFT). Exactly 3 digits that identify the financial institution (e.g., 004 = TD, 002 = Scotiabank). Stored as a string to preserve leading zeros.
    /// </summary>
    [JsonPropertyName("institution_number")]
    [StringLength(3, MinimumLength = 3)]
    public required string? InstitutionNumber { get; init; }

    /// <summary>
    /// The name of the bank account owner.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Include up to 50 <c>key: value</c> pairs to annotate requests with custom metadata.
    /// - Maximum character length for individual <c>keys</c> is 40.
    /// - Maximum character length for individual <c>values</c> is 500.
    /// (For example, <c>order_number: 25</c>, <c>item_type: produce</c>, <c>department: sales</c>)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public object? Tags { get; init; }

    /// <summary>
    /// Canadian branch/branch-transit identifier (EFT). Exactly 5 digits that identify the branch where the account is held. Stored as a string to preserve leading zeros.
    /// </summary>
    [JsonPropertyName("transit_number")]
    [StringLength(5, MinimumLength = 5)]
    public required string? TransitNumber { get; init; }

    /// <summary>
    /// Type of <c>Payment Instrument</c>.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "BANK_ACCOUNT";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
