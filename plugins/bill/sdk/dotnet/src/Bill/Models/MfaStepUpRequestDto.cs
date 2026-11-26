using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// Step-up request for MFA
/// </summary>
public record MfaStepUpRequestDto
{
    /// <summary>
    /// MFA ID. Set this field for creating an MFA-trusted API session.
    /// <para>
    /// This MFA ID is generated when you set <c>rememberMe</c> as <c>true</c> in your <c>POST /v3/mfa/challenge/validate</c> request. This value expires in 30 days.
    /// </para>
    /// <para>
    /// See <see href="https://developer.bill.com/reference/validatechallenge">Validate MFA challenge</see> for more information.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rememberMeId")]
    public string? RememberMeId { get; init; }

    /// <summary>
    /// Mobile device name. This is a nickname for your mobile device. Set this field when you set <c>rememberMeId</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("device")]
    public string? Device { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
