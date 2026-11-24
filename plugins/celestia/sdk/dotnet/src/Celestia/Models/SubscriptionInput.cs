using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Celestia.Core.Models;
using Celestia.Core.Validation;
using Celestia.Core.Validation.Attributes;

namespace Celestia.Models;

public record SubscriptionInput
{
    /// <summary>
    /// Email address whose owner consented to subscribe.
    /// </summary>
    [JsonPropertyName("email")]
    [StringLength(320, MinimumLength = 3)]
    [Format(FormatKind.Email)]
    public required string Email { get; init; }

    /// <summary>
    /// A fresh reCAPTCHA token obtained through the website newsletter form. Automated clients must not bypass this requirement.
    /// </summary>
    [JsonPropertyName("token")]
    [MinLength(1)]
    public required string Token { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
