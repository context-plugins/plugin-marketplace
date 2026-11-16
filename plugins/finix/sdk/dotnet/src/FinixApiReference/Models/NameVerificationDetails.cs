using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// The cardholder name details to verify against the card issuer. Only supported on <c>FINIX_V1</c>.
/// <para>
/// {% admonition type="info" %}
/// When provided, the <c>name</c> field on the <c>Payment Instrument</c> is updated by concatenating <c>first_name</c>, <c>middle_name</c>, and <c>last_name</c>.
/// {% /admonition %}
/// </para>
/// </summary>
public record NameVerificationDetails
{
    /// <summary>
    /// The cardholder's first name.
    /// </summary>
    [JsonPropertyName("first_name")]
    public required string FirstName { get; init; }

    /// <summary>
    /// The cardholder's last name.
    /// </summary>
    [JsonPropertyName("last_name")]
    public required string LastName { get; init; }

    /// <summary>
    /// The cardholder's middle name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("middle_name")]
    public string? MiddleName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
