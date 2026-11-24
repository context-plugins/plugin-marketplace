using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record PurchaseDidlogicComPurchasesApi
{
    /// <summary>
    /// DID phone number
    /// </summary>
    [JsonPropertyName("number")]
    public required string Number { get; init; }

    /// <summary>
    /// Number of channels
    /// </summary>
    [JsonPropertyName("channels")]
    public required int Channels { get; init; }

    /// <summary>
    /// DID country
    /// </summary>
    [JsonPropertyName("country")]
    public required string Country { get; init; }

    /// <summary>
    /// DID area
    /// </summary>
    [JsonPropertyName("area")]
    public required string Area { get; init; }

    /// <summary>
    /// Audio codec
    /// </summary>
    [JsonPropertyName("codec")]
    public required object Codec { get; init; }

    /// <summary>
    /// DID status
    /// </summary>
    [JsonPropertyName("check_state")]
    public required string CheckState { get; init; }

    /// <summary>
    /// Free minutes included
    /// </summary>
    [JsonPropertyName("free_minutes")]
    public required int FreeMinutes { get; init; }

    /// <summary>
    /// Activation fee
    /// </summary>
    [JsonPropertyName("activation")]
    public required double Activation { get; init; }

    /// <summary>
    /// Monthly cost for the DID
    /// </summary>
    [JsonPropertyName("monthly_fee")]
    public required double MonthlyFee { get; init; }

    /// <summary>
    /// Per minute rate
    /// </summary>
    [JsonPropertyName("per_minute")]
    public required double PerMinute { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
