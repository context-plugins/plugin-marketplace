using System.Collections.Generic;
using System.Text.Json.Serialization;
using DidLogic.Core.Models;
using DidLogic.Models.Enums;

namespace DidLogic.Models;

public record Dids4
{
    /// <summary>
    /// Unique DID identifier
    /// </summary>
    [JsonPropertyName("id")]
    public required int Id { get; init; }

    /// <summary>
    /// Phone number
    /// </summary>
    [JsonPropertyName("number")]
    public required string Number { get; init; }

    /// <summary>
    /// Country name where the number is located
    /// </summary>
    [JsonPropertyName("country")]
    public required string Country { get; init; }

    /// <summary>
    /// City or area name
    /// </summary>
    [JsonPropertyName("area")]
    public required string Area { get; init; }

    /// <summary>
    /// Number of simultaneous call channels
    /// </summary>
    [JsonPropertyName("channels")]
    public required int Channels { get; init; }

    /// <summary>
    /// One-time activation fee
    /// </summary>
    [JsonPropertyName("activation")]
    public required double Activation { get; init; }

    /// <summary>
    /// Monthly recurring fee
    /// </summary>
    [JsonPropertyName("monthly_fee")]
    public required double MonthlyFee { get; init; }

    /// <summary>
    /// Per-minute rate for incoming calls
    /// </summary>
    [JsonPropertyName("per_minute")]
    public required double PerMinute { get; init; }

    /// <summary>
    /// List of enabled services (e.g., sms)
    /// </summary>
    [JsonPropertyName("services")]
    public required IReadOnlyList<Service> Services { get; init; }

    /// <summary>
    /// Current status of the number
    /// </summary>
    [JsonPropertyName("status")]
    public required StatusDidlogicComNumbersInventoryApi Status { get; init; }

    /// <summary>
    /// Number of configured routing destinations
    /// </summary>
    [JsonPropertyName("destination_count")]
    public required int DestinationCount { get; init; }

    [JsonPropertyName("call_recording_enabled")]
    public required bool CallRecordingEnabled { get; init; }

    /// <summary>
    /// Minimum commitment period in months
    /// </summary>
    [JsonPropertyName("commitment_months")]
    public required int CommitmentMonths { get; init; }

    /// <summary>
    /// Associated identity/document ID for verification
    /// </summary>
    [JsonPropertyName("identity_id")]
    public required int IdentityId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
