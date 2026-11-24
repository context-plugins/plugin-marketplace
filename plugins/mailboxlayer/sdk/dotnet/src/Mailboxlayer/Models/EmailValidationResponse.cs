using System.Text.Json.Serialization;
using Mailboxlayer.Core.Models;
using Mailboxlayer.Core.Validation;
using Mailboxlayer.Core.Validation.Attributes;

namespace Mailboxlayer.Models;

/// <summary>
/// A single email validation result object. Fields may be <c>true</c>/<c>false</c> or <c>null</c> depending on whether a check was performed or supported by your plan.
/// </summary>
public record EmailValidationResponse
{
    /// <summary>
    /// Exact email address as checked.
    /// </summary>
    [JsonPropertyName("email")]
    [Format(FormatKind.Email)]
    public required string Email { get; init; }

    /// <summary>
    /// Suggested correction if a domain-typo is detected; empty string if none.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("did_you_mean")]
    public string? DidYouMean { get; init; }

    /// <summary>
    /// Local part (before the @) of the email address.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("user")]
    public string? User { get; init; }

    /// <summary>
    /// Domain part (after the @) of the email address.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("domain")]
    public string? Domain { get; init; }

    /// <summary>
    /// Returns true if the email address syntax is valid per RFC rules.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("format_valid")]
    public bool? FormatValid { get; init; }

    /// <summary>
    /// True if MX records for the domain were found.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mx_found")]
    public bool? MxFound { get; init; }

    /// <summary>
    /// Result of SMTP verification (true = mailbox appears to exist).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("smtp_check")]
    public bool? SmtpCheck { get; init; }

    /// <summary>
    /// True if the domain accepts all emails (catch-all). If catch-all detection was not requested or not permitted on plan, this value may be null.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("catch_all")]
    public bool? CatchAll { get; init; }

    /// <summary>
    /// True if the email address is a role account (e.g., admin, support).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("role")]
    public bool? Role { get; init; }

    /// <summary>
    /// True if the address belongs to a known disposable / temporary provider.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("disposable")]
    public bool? Disposable { get; init; }

    /// <summary>
    /// True if the email uses a known free provider (e.g., gmail.com).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("free")]
    public bool? Free { get; init; }

    /// <summary>
    /// Aggregate quality/deliverability score between 0 (worst) and 1 (best).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("score")]
    public double? Score { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
