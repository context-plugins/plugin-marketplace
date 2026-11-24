using System.Text.Json.Serialization;
using Divvy.Core.Models;
using Divvy.Models.Enums;

namespace Divvy.Models;

/// <summary>
/// Card account user response.
/// </summary>
public record OrganizationCardAccountUserResponseDto
{
    /// <summary>
    /// BILL-generated ID of the card account. The value begins with <c>cat</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cardAccountId")]
    public string? CardAccountId { get; init; }

    /// <summary>
    /// BILL-generated ID of the user. The value begins with <c>006</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("userId")]
    public string? UserId { get; init; }

    /// <summary>
    /// Set as <c>true</c> if the card account is archived
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("archived")]
    public bool? Archived { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("verificationStatus")]
    public OrganizationCardAccountUserStatus? VerificationStatus { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
