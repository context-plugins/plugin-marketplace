using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record ProjectUserProfile
{
    /// <summary>
    /// Auto-generated unique User Profile ID
    /// </summary>
    [JsonPropertyName("_id")]
    public required string Id { get; init; }

    /// <summary>
    /// The Project associated with the User Profile
    /// </summary>
    [JsonPropertyName("_project")]
    public required string Project { get; init; }

    /// <summary>
    /// ID of the User who created the User Profile
    /// </summary>
    [JsonPropertyName("a0_user")]
    public required string A0User { get; init; }

    /// <summary>
    /// DVC User Id for User Profile.
    /// Mirrors the SDK <c>user_id</c>, which is capped at 200 characters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dvcUserId")]
    [MaxLength(200)]
    public string? DvcUserId { get; init; }

    /// <summary>
    /// The date the Project User Profile was created
    /// </summary>
    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    /// <summary>
    /// The date the Project User Profile was last updated
    /// </summary>
    [JsonPropertyName("updatedAt")]
    public required DateTimeOffset UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
