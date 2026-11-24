using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// API login as user
/// </summary>
public record LoginAsUserRequestDto
{
    /// <summary>
    /// BILL-generated ID of the user you want to sign in as
    /// </summary>
    [JsonPropertyName("userId")]
    [MinLength(1)]
    public required string UserId { get; init; }

    /// <summary>
    /// BILL-generated ID of the organization you want to sign in to
    /// </summary>
    [JsonPropertyName("organizationId")]
    [MinLength(1)]
    public required string OrganizationId { get; init; }

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
    /// Mobile device name. This is a nickname for your mobile device. This field is required when you set <c>rememberMeId</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("device")]
    public string? Device { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
