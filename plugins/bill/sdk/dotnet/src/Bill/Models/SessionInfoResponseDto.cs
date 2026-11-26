using System.Text.Json.Serialization;
using Bill.Core.Models;
using Bill.Models.Enums;

namespace Bill.Models;

/// <summary>
/// Login session info.
/// </summary>
public record SessionInfoResponseDto
{
    /// <summary>
    /// BILL-generated ID of the current organization
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("organizationId")]
    public string? OrganizationId { get; init; }

    /// <summary>
    /// BILL-generated ID of the current user
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("userId")]
    public string? UserId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mfaStatus")]
    public MfaStatus2? MfaStatus { get; init; }

    /// <summary>
    /// This field is set as <c>true</c> when MFA is disabled at the developer key level. All organizations that are linked to this developer key do not require MFA.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mfaBypass")]
    public bool? MfaBypass { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
