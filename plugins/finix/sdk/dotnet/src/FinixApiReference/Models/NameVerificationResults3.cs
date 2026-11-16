using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

/// <summary>
/// Details the results of verifying the cardholder's name. Not applicable to merchant verification.
/// </summary>
public record NameVerificationResults3
{
    /// <summary>
    /// The result of verifying the cardholder's first name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("first_name")]
    public FirstName? FirstName { get; init; }

    /// <summary>
    /// The result of verifying the cardholder's last name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_name")]
    public LastName? LastName { get; init; }

    /// <summary>
    /// The result of verifying the cardholder's middle name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("middle_name")]
    public MiddleName? MiddleName { get; init; }

    /// <summary>
    /// The result of verifying the cardholder's full name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public Name? Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
