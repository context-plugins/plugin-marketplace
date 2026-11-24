using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Celestia.Core.Models;
using Celestia.Core.Validation;
using Celestia.Core.Validation.Attributes;

namespace Celestia.Models;

public record ContactInput
{
    /// <summary>
    /// Full name; must contain non-whitespace characters.
    /// </summary>
    [JsonPropertyName("fullName")]
    public required string FullName { get; init; }

    /// <summary>
    /// Company name; must contain non-whitespace characters.
    /// </summary>
    [JsonPropertyName("companyName")]
    public required string CompanyName { get; init; }

    /// <summary>
    /// Email address to receive a reply.
    /// </summary>
    [JsonPropertyName("email")]
    [StringLength(320, MinimumLength = 3)]
    [Format(FormatKind.Email)]
    public required string Email { get; init; }

    /// <summary>
    /// Area of interest; must contain non-whitespace characters.
    /// </summary>
    [JsonPropertyName("interestedIn")]
    public required string InterestedIn { get; init; }

    /// <summary>
    /// Optional Telegram handle.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("telegram")]
    public string? Telegram { get; init; }

    /// <summary>
    /// Optional website.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("website")]
    public string? Website { get; init; }

    /// <summary>
    /// Optional project or inquiry details.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("message")]
    public string? Message { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
