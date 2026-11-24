using System.Text.Json.Serialization;
using Basiq.Core.Models;
using Basiq.Core.Validation;
using Basiq.Core.Validation.Attributes;
using Basiq.Models.Enums;

namespace Basiq.Models;

/// <summary>
/// User object with details if the creation succeeded.
/// </summary>
public record UserPostResponse
{
    /// <summary>
    /// Type of the response, always "user".
    /// </summary>
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    /// <summary>
    /// A string that uniquely identifies the user.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The end-users email address.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    [Format(FormatKind.Email)]
    public string? Email { get; init; }

    /// <summary>
    /// The end-users mobile number.
    /// </summary>
    [JsonPropertyName("mobile")]
    public required string Mobile { get; init; }

    /// <summary>
    /// The end-users first name as an optional additional parameter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("firstName")]
    public string? FirstName { get; init; }

    /// <summary>
    /// The end-users middle name as an optional additional parameter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("middleName")]
    public string? MiddleName { get; init; }

    /// <summary>
    /// The end-users last name as an optional additional parameter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastName")]
    public string? LastName { get; init; }

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
    /// Link object containing a link to the resource, self reference.
    /// </summary>
    [JsonPropertyName("links")]
    public required ResourceLink Links { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
