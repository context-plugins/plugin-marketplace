using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// Get phone status response.
/// </summary>
public record GetPhoneStatusResponseDto
{
    /// <summary>
    /// Set as <c>true</c> if the user has an existing phone number for risk verification
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hasPhone")]
    public bool? HasPhone { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
