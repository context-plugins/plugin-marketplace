using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record UpdateUserProfileDto
{
    /// <summary>
    /// DVC User Id for User Profile.
    /// Mirrors the SDK <c>user_id</c>, which is capped at 200 characters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dvcUserId")]
    [MaxLength(200)]
    public string? DvcUserId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
