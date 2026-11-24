using System;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// One day of commitment-coverage breakdown. Money fields are wrapped objects (<c>{amount, currency}</c>). Omitted cost properties mean that coverage type had no spend for the day.
/// </summary>
public record AwsDailyCoverageEntry
{
    /// <summary>
    /// Calendar day (UTC) for this coverage row in format YYYY-MM-DD.
    /// </summary>
    [JsonPropertyName("date")]
    public required DateTimeOffset Date { get; init; }

    /// <summary>
    /// On-demand spend not covered by commitments for the day.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("onDemandCost")]
    public Money? OnDemandCost { get; init; }

    /// <summary>
    /// Spend covered by Savings Plans for the day.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("savingsPlanCost")]
    public Money? SavingsPlanCost { get; init; }

    /// <summary>
    /// Spend covered by Reserved Instances for the day.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reservedInstCost")]
    public Money? ReservedInstCost { get; init; }

    /// <summary>
    /// Spend covered by DoiT Flexsave for the day.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("flexsaveCost")]
    public Money? FlexsaveCost { get; init; }

    /// <summary>
    /// Spot Instance spend for the day.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("spotCost")]
    public Money? SpotCost { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
