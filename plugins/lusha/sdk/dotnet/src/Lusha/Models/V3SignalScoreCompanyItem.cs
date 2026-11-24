using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Lusha.Core.Models;
using Lusha.Core.Validation;
using Lusha.Core.Validation.Attributes;

namespace Lusha.Models;

/// <summary>
/// Must contain exactly one of id, domain, name, or email.
/// </summary>
public record V3SignalScoreCompanyItem
{
    /// <summary>
    /// Caller-supplied token echoed back on the matching result.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clientReferenceId")]
    [MaxLength(256)]
    public string? ClientReferenceId { get; init; }

    /// <summary>
    /// Encrypted Lusha company ID (vN.…). Legacy numeric IDs accepted during the transition window.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("domain")]
    public string? Domain { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Must be a valid email address; only the domain part is used for resolution. A malformed email is rejected with 400.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    [Format(FormatKind.Email)]
    public string? Email { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
