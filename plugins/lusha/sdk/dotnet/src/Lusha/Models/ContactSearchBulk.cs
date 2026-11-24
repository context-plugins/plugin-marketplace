using System.Collections.Generic;
using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record ContactSearchBulk
{
    /// <summary>
    /// A unique sequential ID to associate with the contact object in the API response
    /// </summary>
    [JsonPropertyName("contactId")]
    public required string ContactId { get; init; }

    /// <summary>
    /// The unique person identifier in Lusha
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("personId")]
    public string? PersonId { get; init; }

    /// <summary>
    /// The full name of the person
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fullName")]
    public string? FullName { get; init; }

    /// <summary>
    /// The raw location of the person
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("location")]
    public string? Location { get; init; }

    /// <summary>
    /// The LinkedIn URL of the person
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linkedinUrl")]
    public string? LinkedinUrl { get; init; }

    /// <summary>
    /// The email address of the person
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    public string? Email { get; init; }

    /// <summary>
    /// Details of the company where the contact is currently employed (or previously employed if applicable)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("companies")]
    public IReadOnlyList<CompanyLushaApiDocumentationEnrichmentApi>? Companies { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
