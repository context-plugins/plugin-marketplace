using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

public record PaymentInformation
{
    /// <summary>
    /// BILL-generated ID of the bank account used to pay each bill. The value begins with <c>bac</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bankAccountId")]
    public string? BankAccountId { get; init; }

    /// <summary>
    /// BILL-generated ID of the card account used to pay each bill. The value begins with <c>cat</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cardAccountId")]
    public string? CardAccountId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
