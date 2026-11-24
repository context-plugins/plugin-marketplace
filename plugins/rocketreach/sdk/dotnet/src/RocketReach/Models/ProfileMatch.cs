using System.Collections.Generic;
using System.Text.Json.Serialization;
using RocketReach.Core.Models;
using RocketReach.Core.Validation;
using RocketReach.Core.Validation.Attributes;
using RocketReach.Models.Enums;

namespace RocketReach.Models;

public record ProfileMatch
{
    /// <summary>
    /// RocketReach internal unique profile ID.
    /// - Example: <c>123456</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public int? Id { get; init; }

    /// <summary>
    /// Name of the desired profile. Must specify along with <c>current_employer</c>.
    /// - Example: <c>Jamie Gullbrand</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Current employer of the desired profile. Must specify along with <c>name</c>.
    /// - Example: <c>RocketReach</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("current_employer")]
    public string? CurrentEmployer { get; init; }

    /// <summary>
    /// Job title of the desired profile.
    /// - Example: <c>Product Manager</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    /// <summary>
    /// linkedin_ext_url deprecated, please use <c>linkedin_url</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linkedin_ext_url")]
    public string? LinkedinExtUrl { get; init; }

    /// <summary>
    /// LinkedIn URL of the desired profile.
    /// - Example: <c>www.linkedin.com/in/jamesgullbrand</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linkedin_url")]
    public string? LinkedinUrl { get; init; }

    /// <summary>
    /// An email address for the desired profile.
    /// - Example: <c>jamie@rocketreach.co</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    [Format(FormatKind.Email)]
    public string? Email { get; init; }

    /// <summary>
    /// A phone number for the desired profile in either E.164 format or international format.
    /// - Example: <c>+15555555555</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phone")]
    public string? Phone { get; init; }

    /// <summary>
    /// An NPI number for the desired profile (US healthcare professional)
    /// - Example: <c>1234567890</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("npi_number")]
    public int? NpiNumber { get; init; }

    /// <summary>
    /// Lookup type for the request
    /// <list type="bullet">
    ///   <item><description><c>standard</c> - standard</description></item>
    ///   <item><description><c>premium</c> - premium</description></item>
    ///   <item><description><c>premium (feeds disabled)</c> - premium (feeds disabled)</description></item>
    ///   <item><description><c>bulk</c> - bulk</description></item>
    ///   <item><description><c>phone</c> - phone</description></item>
    ///   <item><description><c>enrich</c> - enrich</description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lookup_type")]
    public LookupTypeEnum? LookupType { get; init; } = LookupTypeEnum.Standard;

    /// <summary>
    /// User metadata about the profile, such as external ids, tags, notes, etc.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public IReadOnlyDictionary<string, object>? Metadata { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
