using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Bill.Core.Models;
using Bill.Models.Enums;

namespace Bill.Models;

/// <summary>
/// Create a customer bank account
/// </summary>
public record CreateCustomerBankAccountRequestDto
{
    /// <summary>
    /// Customer bank account name
    /// </summary>
    [JsonPropertyName("nameOnAccount")]
    [MinLength(1)]
    public required string NameOnAccount { get; init; }

    /// <summary>
    /// Customer bank account nickname
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nickname")]
    public string? Nickname { get; init; }

    /// <summary>
    /// Customer bank routing number
    /// </summary>
    [JsonPropertyName("routingNumber")]
    [MinLength(1)]
    public required string RoutingNumber { get; init; }

    /// <summary>
    /// Customer bank account number
    /// </summary>
    [JsonPropertyName("accountNumber")]
    [MinLength(1)]
    public required string AccountNumber { get; init; }

    [JsonPropertyName("type")]
    public required BankAccountType Type { get; init; }

    [JsonPropertyName("ownerType")]
    public required BankAccountOwnerType OwnerType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
