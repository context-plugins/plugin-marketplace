using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

public record NameVerificationResults
{
    /// <summary>
    /// The result of verifying the cardholder's first name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("first_name_verification")]
    public FirstNameVerification? FirstNameVerification { get; init; }

    /// <summary>
    /// The result of verifying the cardholder's last name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_name_verification")]
    public LastNameVerification? LastNameVerification { get; init; }

    /// <summary>
    /// The result of verifying the cardholder's middle name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("middle_name_verification")]
    public MiddleNameVerification? MiddleNameVerification { get; init; }

    /// <summary>
    /// The result of verifying the cardholder's full name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name_verification")]
    public NameVerification2? NameVerification { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
