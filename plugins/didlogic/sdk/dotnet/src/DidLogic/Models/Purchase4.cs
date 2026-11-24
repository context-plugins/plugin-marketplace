using System.Collections.Generic;
using System.Text.Json.Serialization;
using DidLogic.Core.Models;
using DidLogic.Models.Enums;

namespace DidLogic.Models;

/// <summary>
/// Updated purchase details
/// </summary>
public record Purchase4
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
    /// Maximum simultaneous calls
    /// </summary>
    [JsonPropertyName("channels")]
    public required int Channels { get; init; }

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
    /// Enabled services for this number
    /// </summary>
    [JsonPropertyName("services")]
    public required IReadOnlyList<object> Services { get; init; }

    /// <summary>
    /// Number status
    /// </summary>
    [JsonPropertyName("status")]
    public required Status1DidlogicComNumbersInventoryApi Status { get; init; }

    /// <summary>
    /// Number of configured routing destinations
    /// </summary>
    [JsonPropertyName("destination_count")]
    public required int DestinationCount { get; init; }

    /// <summary>
    /// Whether inbound call recording is enabled for this DID
    /// </summary>
    [JsonPropertyName("call_recording_enabled")]
    public required bool CallRecordingEnabled { get; init; }

    /// <summary>
    /// Minimum service term in months (omitted when the commitment policy is disabled)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("commitment_months")]
    public int? CommitmentMonths { get; init; }

    /// <summary>
    /// Associated identity ID
    /// </summary>
    [JsonPropertyName("identity_id")]
    public required int IdentityId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
