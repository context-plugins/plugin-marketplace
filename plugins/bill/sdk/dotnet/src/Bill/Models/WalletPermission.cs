using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// Funding account wallet permission response.
/// </summary>
public record WalletPermission
{
    /// <summary>
    /// This field is set as <c>true</c> if you have access to Wallet (BILL balance) as a payment method
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fundingEnabled")]
    public bool? FundingEnabled { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
