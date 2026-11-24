using System.Text.Json.Serialization;
using Basiq.Core.Models;
using Basiq.Models.Enums;

namespace Basiq.Models;

public record UsersRequest
{
    /// <summary>
    /// The end-users email address. Mandatory if mobile is not supplied.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    public string? Email { get; init; }

    /// <summary>
    /// The end-users mobile number, supplied in international format. +[country-code][mobileno]. Mandatory if email is not supplied.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mobile")]
    public string? Mobile { get; init; }

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

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
