using System.Text.Json.Serialization;
using ForceDream.Core.Models;
using ForceDream.Core.Validation;
using ForceDream.Core.Validation.Attributes;

namespace ForceDream.Models;

public record ApiSignupRequest
{
    [JsonPropertyName("email")]
    [Format(FormatKind.Email)]
    public required string Email { get; init; }

    /// <summary>
    /// Explicit opt-in only. Defaults to false -- an email address existing because someone signed up is never treated as consent to be contacted.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("marketing_consent")]
    public bool? MarketingConsent { get; init; } = false;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
