using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record SignupVerificationCode
{
    /// <summary>
    /// The 6-digit code from the verification email.
    /// </summary>
    [JsonPropertyName("code")]
    [StringLength(6, MinimumLength = 6)]
    [RegularExpression("^[0-9]{6}$")]
    public required string Code { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
