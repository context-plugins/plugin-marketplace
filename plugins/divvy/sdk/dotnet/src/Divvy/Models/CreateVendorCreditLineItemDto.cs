using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// Vendor Credit Create Request Line Item.
/// </summary>
public record CreateVendorCreditLineItemDto
{
    /// <summary>
    /// Vendor credit line item description
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Vendor credit line item amount. For a vendor credit in an international currency (not USD), this value is in the local currency.
    /// </summary>
    [JsonPropertyName("amount")]
    public required double Amount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("classifications")]
    public ClassificationsBillV3RecurringbillsApi? Classifications { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
