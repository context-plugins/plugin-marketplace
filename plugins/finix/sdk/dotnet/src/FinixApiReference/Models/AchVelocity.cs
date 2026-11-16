using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// An object that contains the current usage and limits for ACH disbursements.
/// </summary>
public record AchVelocity
{
    /// <summary>
    /// An object that contains the current usage and limits for disbursements.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("daily_velocity")]
    public Velocity? DailyVelocity { get; init; }

    /// <summary>
    /// An object that contains the current usage and limits for disbursements.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("monthly_velocity")]
    public Velocity? MonthlyVelocity { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
