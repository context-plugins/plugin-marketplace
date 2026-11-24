using System;
using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// Wallet disbursement dto when the disbursement type is wallet.
/// </summary>
public record WalletDisbursement
{
    /// <summary>
    /// Instant Transfer (wallet) payment arrives by date
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("arrivesByDate")]
    public DateTimeOffset? ArrivesByDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
