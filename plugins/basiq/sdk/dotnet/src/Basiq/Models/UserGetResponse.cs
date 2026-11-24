using System.Text.Json.Serialization;
using Basiq.Core.Models;
using Basiq.Core.Validation;
using Basiq.Core.Validation.Attributes;
using Basiq.Models.Enums;

namespace Basiq.Models;

/// <summary>
/// User object with details if the creation succeeded.
/// </summary>
public record UserGetResponse
{
    /// <summary>
    /// Always "user".
    /// </summary>
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    /// <summary>
    /// User identification.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// User email or empty.
    /// </summary>
    [JsonPropertyName("email")]
    [Format(FormatKind.Email)]
    public required string Email { get; init; }

    /// <summary>
    /// User mobile number, or empty.
    /// </summary>
    [JsonPropertyName("mobile")]
    public required string Mobile { get; init; }

    /// <summary>
    /// Name, or empty.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// firstName, or empty
    /// </summary>
    [JsonPropertyName("firstName")]
    public required string FirstName { get; init; }

    /// <summary>
    /// middleName, or empty
    /// </summary>
    [JsonPropertyName("middleName")]
    public required string MiddleName { get; init; }

    /// <summary>
    /// lastName, or empty
    /// </summary>
    [JsonPropertyName("lastName")]
    public required string LastName { get; init; }

    /// <summary>
    /// The official name of the business.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("businessName")]
    public string? BusinessName { get; init; }

    /// <summary>
    /// This number is used to identify a business when they’re dealing with the government, other businesses, and the public.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("businessIdNo")]
    public string? BusinessIdNo { get; init; }

    /// <summary>
    /// Type of business ID could be ABN Or ACN.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("businessIdNoType")]
    public BusinessIdNoType? BusinessIdNoType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("businessAddress")]
    public BusinessAddress? BusinessAddress { get; init; }

    /// <summary>
    /// Indicates if the business information provided is verified against the Australian Business Register.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("verificationStatus")]
    public bool? VerificationStatus { get; init; }

    /// <summary>
    /// when the verification was done.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("verificationDate")]
    public string? VerificationDate { get; init; }

    /// <summary>
    /// Container object containing connection data.
    /// </summary>
    [JsonPropertyName("connections")]
    public required UserGetConnection Connections { get; init; }

    /// <summary>
    /// Container object containing account data.
    /// </summary>
    [JsonPropertyName("accounts")]
    public required UserGetAccount Accounts { get; init; }

    /// <summary>
    /// Object containing links to resources.
    /// </summary>
    [JsonPropertyName("links")]
    public required GetUserLinks Links { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
