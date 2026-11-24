using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Statable.Core.Models;
using Statable.Core.Validation;
using Statable.Core.Validation.Attributes;
using Statable.Models.Enums;

namespace Statable.Models;

public record BootstrapVerifyOtpRequest
{
    [JsonPropertyName("email")]
    [Format(FormatKind.Email)]
    public required string Email { get; init; }

    /// <summary>
    /// The code from the email. Single-use; three wrong guesses destroy it.
    /// </summary>
    [JsonPropertyName("code")]
    public required string Code { get; init; }

    /// <summary>
    /// Must be true. Recorded server-side with the version, channel <c>api</c>, IP and User-Agent as the account's acceptance evidence.
    /// </summary>
    [JsonPropertyName("accept_terms")]
    public required bool AcceptTerms { get; init; }

    /// <summary>
    /// The version being accepted. Defaults to the server's current version.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("terms_version")]
    public string? TermsVersion { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("key_name")]
    [MaxLength(100)]
    public string? KeyName { get; init; } = "agent bootstrap";

    /// <summary>
    /// Must be within <c>API_BOOTSTRAP_SCOPES</c> (default <c>read,sites:write</c>). Omitted = that whole set. <c>billing:write</c> is never available here.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scopes")]
    public IReadOnlyList<Scope>? Scopes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expires_in_days")]
    [Minimum(1)]
    [Maximum(365)]
    public int? ExpiresInDays { get; init; } = 90;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
