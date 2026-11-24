using System.Text.Json.Serialization;
using Basiq.Core.Models;
using Basiq.Core.Validation;
using Basiq.Core.Validation.Attributes;

namespace Basiq.Models;

/// <summary>
/// Required when type is IDENTITY_VERIFICATION. At least one field must be provided.
/// </summary>
public record IdentityVerificationData
{
    /// <summary>
    /// Full name to verify.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Email address to verify.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    [Format(FormatKind.Email)]
    public string? Email { get; init; }

    /// <summary>
    /// Phone number to verify (E.164 format recommended).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phone")]
    public string? Phone { get; init; }

    /// <summary>
    /// Address to verify.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("address")]
    public string? Address { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
