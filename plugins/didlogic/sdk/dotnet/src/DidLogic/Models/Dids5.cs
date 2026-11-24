using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record Dids5
{
    /// <summary>
    /// DID identifier
    /// </summary>
    [JsonPropertyName("id")]
    public required int Id { get; init; }

    /// <summary>
    /// Phone number
    /// </summary>
    [JsonPropertyName("number")]
    public required string Number { get; init; }

    /// <summary>
    /// Whether SMS is enabled
    /// </summary>
    [JsonPropertyName("sms_enabled")]
    public required bool SmsEnabled { get; init; }

    /// <summary>
    /// Whether local caller ID is disabled
    /// </summary>
    [JsonPropertyName("no_local_cli")]
    public required bool NoLocalCli { get; init; }

    /// <summary>
    /// Maximum simultaneous calls
    /// </summary>
    [JsonPropertyName("channels")]
    public required int Channels { get; init; }

    /// <summary>
    /// Country name
    /// </summary>
    [JsonPropertyName("country")]
    public required string Country { get; init; }

    /// <summary>
    /// City/area name
    /// </summary>
    [JsonPropertyName("area")]
    public required string Area { get; init; }

    /// <summary>
    /// Free minutes included per month
    /// </summary>
    [JsonPropertyName("free_minutes")]
    public required int FreeMinutes { get; init; }

    /// <summary>
    /// Audio codec
    /// </summary>
    [JsonPropertyName("codec")]
    public required object Codec { get; init; }

    /// <summary>
    /// Comma-separated list of required document type IDs: 1 - Personal ID, 2 - Proof of Address, 3 - Proof of Local Address, 4 - Business Registration, 5 - Local Business Registration, 6 - Letter of Intent
    /// </summary>
    [JsonPropertyName("require_docs")]
    public required string RequireDocs { get; init; }

    /// <summary>
    /// Minimum service term in months
    /// </summary>
    [JsonPropertyName("commitment_months")]
    public required int CommitmentMonths { get; init; }

    /// <summary>
    /// Whether number has never been sold before (1=yes, 0=no)
    /// </summary>
    [JsonPropertyName("never_sold")]
    public required int NeverSold { get; init; }

    /// <summary>
    /// One-time activation fee (USD)
    /// </summary>
    [JsonPropertyName("activation")]
    public required double Activation { get; init; }

    /// <summary>
    /// Monthly recurring fee (USD)
    /// </summary>
    [JsonPropertyName("monthly_fee")]
    public required double MonthlyFee { get; init; }

    /// <summary>
    /// Per-minute inbound call rate (USD)
    /// </summary>
    [JsonPropertyName("per_minute")]
    public required double PerMinute { get; init; }

    /// <summary>
    /// Per-minute origination rate (USD)
    /// </summary>
    [JsonPropertyName("origination_per_min")]
    public required double OriginationPerMin { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
