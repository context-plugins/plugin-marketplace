using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Core.Validation;
using DoiT.Core.Validation.Attributes;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Redacted public view of a signup request. Never includes the admin email, the verification code or the idempotency key.
/// </summary>
public record SignupRequest
{
    /// <summary>
    /// Public request id (sr_ prefix); an unguessable capability.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("status")]
    public required StatusDoiTSignupApi Status { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("channel")]
    public ChannelDoiTSignupApi? Channel { get; init; }

    /// <summary>
    /// Company name supplied at signup; shown on the console verification and completion pages.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("companyName")]
    public string? CompanyName { get; init; }

    /// <summary>
    /// Page where the organization's admin verifies the request (pending_consent only).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("consentUrl")]
    [Format(FormatKind.Uri)]
    public string? ConsentUrl { get; init; }

    /// <summary>
    /// Returned once, by the verifySignupRequest call that performed the verification. Redeem it with createSignupSession after the request is completed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("activationToken")]
    public string? ActivationToken { get; init; }

    /// <summary>
    /// Present while the request awaits the emailed code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("verification")]
    public SignupVerification? Verification { get; init; }

    /// <summary>
    /// When an unverified request expires (pending_consent only).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expiresAt")]
    public DateTimeOffset? ExpiresAt { get; init; }

    /// <summary>
    /// Suggested polling interval while the request is not terminal.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pollAfterSeconds")]
    public int? PollAfterSeconds { get; init; }

    /// <summary>
    /// The provisioned tenant (completed only).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customerId")]
    public string? CustomerId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("consoleUrl")]
    [Format(FormatKind.Uri)]
    public string? ConsoleUrl { get; init; }

    /// <summary>
    /// Page where the admin signs into the new tenant (completed only).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signInUrl")]
    [Format(FormatKind.Uri)]
    public string? SignInUrl { get; init; }

    /// <summary>
    /// Trial tier name (trial).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tier")]
    public string? Tier { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trialEndDate")]
    public DateTimeOffset? TrialEndDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextSteps")]
    public IReadOnlyList<string>? NextSteps { get; init; }

    /// <summary>
    /// Why a terminal request did not complete.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reason")]
    public ReasonDoiTSignupApi? Reason { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
