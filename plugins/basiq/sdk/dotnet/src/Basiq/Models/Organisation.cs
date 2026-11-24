using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

/// <summary>
/// Organisation data.
/// </summary>
public record Organisation
{
    /// <summary>
    /// Agent first name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("agentFirstName")]
    public string? AgentFirstName { get; init; }

    /// <summary>
    /// Agent last name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("agentLastName")]
    public string? AgentLastName { get; init; }

    /// <summary>
    /// Agent role.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("agentRole")]
    public string? AgentRole { get; init; }

    /// <summary>
    /// Business name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("businessName")]
    public string? BusinessName { get; init; }

    /// <summary>
    /// Legal name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("legalName")]
    public string? LegalName { get; init; }

    /// <summary>
    /// Short name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shortName")]
    public string? ShortName { get; init; }

    /// <summary>
    /// Australian Business Number.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("abn")]
    public string? Abn { get; init; }

    /// <summary>
    /// Australian Company Number.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("acn")]
    public string? Acn { get; init; }

    /// <summary>
    /// Indicates whether is Australian Company Number registered.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("isACNCRegistered")]
    public bool? IsAcncRegistered { get; init; }

    /// <summary>
    /// Industry Code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("industryCode")]
    public string? IndustryCode { get; init; }

    /// <summary>
    /// Industry Code Version.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("industryCodeVersion")]
    public string? IndustryCodeVersion { get; init; }

    /// <summary>
    /// Organisation Type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("organisationType")]
    public string? OrganisationType { get; init; }

    /// <summary>
    /// Registered Country.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("registeredCountry")]
    public string? RegisteredCountry { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
