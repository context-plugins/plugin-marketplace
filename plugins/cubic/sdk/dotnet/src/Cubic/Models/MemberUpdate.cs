using System.Text.Json.Serialization;
using Cubic.Models.Enums;

namespace Cubic.Models;

public record MemberUpdate
{
    /// <summary>
    /// Desired seat state. Send with expectedSeat.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("seat")]
    public bool? Seat { get; init; }

    /// <summary>
    /// Desired role. Send with expectedRole.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("role")]
    public Role3? Role { get; init; }

    /// <summary>
    /// Current seat state from your latest read; send only with seat.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expectedSeat")]
    public bool? ExpectedSeat { get; init; }

    /// <summary>
    /// Current role from your latest read; send only with role.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expectedRole")]
    public ExpectedRole? ExpectedRole { get; init; }
}
