using System.Collections.Generic;
using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record Dids1
{
    /// <summary>
    /// DID identifier
    /// </summary>
    [JsonPropertyName("id")]
    public required int Id { get; init; }

    /// <summary>
    /// Country name
    /// </summary>
    [JsonPropertyName("country")]
    public required string Country { get; init; }

    /// <summary>
    /// City name
    /// </summary>
    [JsonPropertyName("city")]
    public required string City { get; init; }

    /// <summary>
    /// Whether SMS is available for this number
    /// </summary>
    [JsonPropertyName("sms_enabled")]
    public required bool SmsEnabled { get; init; }

    /// <summary>
    /// Whether number does not support local caller ID
    /// </summary>
    [JsonPropertyName("no_local_cli")]
    public required bool NoLocalCli { get; init; }

    /// <summary>
    /// Maximum simultaneous calls
    /// </summary>
    [JsonPropertyName("channels")]
    public required int Channels { get; init; }

    /// <summary>
    /// Free minutes included per month
    /// </summary>
    [JsonPropertyName("free_min")]
    public required int FreeMin { get; init; }

    /// <summary>
    /// Caller Name (CNAM) support
    /// </summary>
    [JsonPropertyName("cnam")]
    public required bool Cnam { get; init; }

    /// <summary>
    /// Minimum service term in months
    /// </summary>
    [JsonPropertyName("commitment_months")]
    public required int CommitmentMonths { get; init; }

    /// <summary>
    /// List of required documents for this number
    /// </summary>
    [JsonPropertyName("required_documents")]
    public required IReadOnlyList<RequiredDocument> RequiredDocuments { get; init; }

    /// <summary>
    /// One-time activation fee (USD)
    /// </summary>
    [JsonPropertyName("activation")]
    public required double Activation { get; init; }

    /// <summary>
    /// Monthly recurring fee (USD)
    /// </summary>
    [JsonPropertyName("monthly")]
    public required double Monthly { get; init; }

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

    /// <summary>
    /// State name (if applicable)
    /// </summary>
    [JsonPropertyName("state")]
    public required string State { get; init; }

    /// <summary>
    /// ISO country code
    /// </summary>
    [JsonPropertyName("country_short_name")]
    public required string CountryShortName { get; init; }

    /// <summary>
    /// Phone number
    /// </summary>
    [JsonPropertyName("number")]
    public required string Number { get; init; }

    /// <summary>
    /// Whether number has never been sold before (1=yes, 0=no)
    /// </summary>
    [JsonPropertyName("never_sold")]
    public required int NeverSold { get; init; }

    [JsonPropertyName("call_recording_enabled")]
    public required bool CallRecordingEnabled { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
