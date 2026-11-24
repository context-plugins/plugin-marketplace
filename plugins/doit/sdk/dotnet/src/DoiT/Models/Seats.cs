using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Licensing seat counts for a subscription.
/// </summary>
public record Seats
{
    /// <summary>
    /// The number of seats that are currently in use or assigned to users.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("licensedNumberOfSeats")]
    public long? LicensedNumberOfSeats { get; init; }

    /// <summary>
    /// The maximum number of seats that can be used. Applies to flexible (non-commitment) plans.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maximumNumberOfSeats")]
    public long? MaximumNumberOfSeats { get; init; }

    /// <summary>
    /// The number of committed seats. Applies to annual commitment plans.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("numberOfSeats")]
    public long? NumberOfSeats { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
