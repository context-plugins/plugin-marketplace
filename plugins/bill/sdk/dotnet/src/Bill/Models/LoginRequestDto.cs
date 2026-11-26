using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// API login
/// </summary>
public record LoginRequestDto
{
    /// <summary>
    /// Developer key sent to you by BILL when you create a developer account
    /// </summary>
    [JsonPropertyName("devKey")]
    public required string DevKey { get; init; }

    /// <summary>
    /// Email address used to sign in to your BILL account
    /// </summary>
    [JsonPropertyName("username")]
    public required string Username { get; init; }

    /// <summary>
    /// Password used to sign in to your BILL account
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("password")]
    public string? Password { get; init; }

    /// <summary>
    /// Console API token.
    /// <para>
    /// As a BILL Accountant Console user, use <c>POST /v3/login</c> to sign in to a client organization.
    /// * <c>username</c>: Your BILL Accountant Console email address
    /// * <c>consoleApiToken</c>: Your Console API token
    /// * <c>devKey</c>: Developer key of the client organization
    /// * <c>organizationId</c>: Organization ID of the client organization
    /// </para>
    /// <para>
    /// See <see href="https://developer.bill.com/docs/bill-accountant-console-operations">BILL Accountant Console operations</see> for more information.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("consoleApiToken")]
    public string? ConsoleApiToken { get; init; }

    /// <summary>
    /// Organization ID
    /// </summary>
    [JsonPropertyName("organizationId")]
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
    /// Mobile device name. This is a nickname for your mobile device. Set this field when you set <c>rememberMeId</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("device")]
    public string? Device { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
