using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// Nominate a bank account user
/// </summary>
public record NominateBankAccountUserRequestDto
{
    /// <summary>
    /// BILL-generated ID of the user. The value begins with <c>006</c>.
    /// </summary>
    [JsonPropertyName("userId")]
    [MinLength(1)]
    public required string UserId { get; init; }

    /// <summary>
    /// BILL-generated ID of the bank account. The value begins with <c>bac</c>.
    /// <para>
    /// <b>Note</b>: The bank account <c>status</c> must be set as <c>VERIFIED</c>.
    /// </para>
    /// </summary>
    [JsonPropertyName("bankAccountId")]
    [MinLength(1)]
    public required string BankAccountId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
