using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Core.Validation;
using DoiT.Core.Validation.Attributes;

namespace DoiT.Models;

public record SignupRequestCreate
{
    /// <summary>
    /// Work email of the organization's admin. Free-mail and disposable addresses are rejected.
    /// </summary>
    [JsonPropertyName("email")]
    [MaxLength(120)]
    [Format(FormatKind.Email)]
    public required string Email { get; init; }

    [JsonPropertyName("companyName")]
    [StringLength(120, MinimumLength = 1)]
    public required string CompanyName { get; init; }

    /// <summary>
    /// Attribution. channel defaults to agent; console and web are the human channels.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source")]
    public Source? Source { get; init; }

    /// <summary>
    /// Cloudflare Turnstile response token. Required for the console and web channels.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("turnstileToken")]
    [MaxLength(2048)]
    public string? TurnstileToken { get; init; }

    /// <summary>
    /// Terms of Service acceptance. Required for the console and web channels.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("termsConsent")]
    public TermsConsent? TermsConsent { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
