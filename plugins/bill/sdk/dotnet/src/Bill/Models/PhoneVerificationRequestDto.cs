using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Bill.Core.Models;
using Bill.Models.Enums;

namespace Bill.Models;

/// <summary>
/// Add a phone number for risk verification
/// </summary>
public record PhoneVerificationRequestDto
{
    /// <summary>
    /// Phone number
    /// </summary>
    [JsonPropertyName("phoneNumber")]
    [RegularExpression("(\\d{10}$)")]
    public required string PhoneNumber { get; init; }

    [JsonPropertyName("phoneType")]
    public required PhoneType PhoneType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
