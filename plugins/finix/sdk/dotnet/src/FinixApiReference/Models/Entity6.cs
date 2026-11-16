using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// Identifying information about the recipient.
/// </summary>
public record Entity6
{
    /// <summary>
    /// The legal first name of the buyer (max 20 characters).
    /// </summary>
    [JsonPropertyName("first_name")]
    public required string FirstName { get; init; }

    /// <summary>
    /// The legal last name of the buyer (max 20 characters).
    /// </summary>
    [JsonPropertyName("last_name")]
    public required string LastName { get; init; }

    /// <summary>
    /// The billing address of the buyer. This field is used for identity verification purposes.
    /// </summary>
    [JsonPropertyName("personal_address")]
    public required Address PersonalAddress { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
