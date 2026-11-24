using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using JuriSign.Core.Models;
using JuriSign.Core.Validation;
using JuriSign.Core.Validation.Attributes;
using JuriSign.Models.Enums;

namespace JuriSign.Models;

public record Signer
{
    /// <summary>
    /// First name
    /// </summary>
    [JsonPropertyName("prenom")]
    [MaxLength(255)]
    public required string Prenom { get; init; }

    /// <summary>
    /// Last name
    /// </summary>
    [JsonPropertyName("nom")]
    [MaxLength(255)]
    public required string Nom { get; init; }

    /// <summary>
    /// Email address
    /// </summary>
    [JsonPropertyName("email")]
    [Format(FormatKind.Email)]
    public required string Email { get; init; }

    /// <summary>
    /// OTP verification channel
    /// </summary>
    [JsonPropertyName("otp_channel")]
    public required OtpChannelJuriSignSignRequestsApi OtpChannel { get; init; }

    /// <summary>
    /// Required when otp_channel is 'sms'
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("telephone")]
    [MaxLength(20)]
    public string? Telephone { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
