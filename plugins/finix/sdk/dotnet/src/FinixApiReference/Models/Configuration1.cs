using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Core.Validation.Attributes;

namespace FinixApiReference.Models;

/// <summary>
/// Device configuration settings.
/// </summary>
public record Configuration1
{
    /// <summary>
    /// Represents the transaction amount that a <c>Merchant</c> charges the buyer when creating a <c>Transfer</c> or an <c>Authorization</c>. The value cannot exceed <c>300</c> (i.e., 3%). For devices on Standalone Mode, the Finix Payment Application on the terminal will calculate and send a <c>Transfer</c> or an <c>Authorization</c> request with the surcharge added. Customers integrated directly into Finix API must contact Support to incorporate surcharging appropriately into their integration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("surcharge_basis_points")]
    [Maximum(300)]
    public int? SurchargeBasisPoints { get; init; } = 0;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
