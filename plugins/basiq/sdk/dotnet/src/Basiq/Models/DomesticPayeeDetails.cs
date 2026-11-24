using System.Text.Json.Serialization;
using Basiq.Core.Models;
using Basiq.Models.Enums;

namespace Basiq.Models;

/// <summary>
/// Details specific to domestic payees.
/// </summary>
public record DomesticPayeeDetails
{
    /// <summary>
    /// The type of domestic payee account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payeeAccountUType")]
    public PayeeAccountUType? PayeeAccountUType { get; init; }

    /// <summary>
    /// Bank account details for domestic payee.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("account")]
    public Account? Account { get; init; }

    /// <summary>
    /// PayID details for domestic payee.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payId")]
    public PayId? PayId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
