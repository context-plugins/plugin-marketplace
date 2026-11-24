using System.Collections.Generic;
using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record V3CompanyPreviewLushaApiDocumentationWebsiteVisitsApi
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clientReferenceId")]
    public string? ClientReferenceId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("domain")]
    public string? Domain { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("employeeCount")]
    public EmployeeCount? EmployeeCount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("industry")]
    public string? Industry { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("location")]
    public LocationLushaApiDocumentationWebsiteVisitsApi? Location { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("socialLinks")]
    public SocialLinks? SocialLinks { get; init; }

    /// <summary>
    /// Available data points that can be revealed via Enrich Companies. Includes base firmographic fields plus new revealable fields: employeesByDepartment, employeesByLocation, employeesBySeniority, competitors, businessModel, phones, emails, keywords, socialLinks, estimatedAnnualItSpend, monthlyWebsiteTraffic.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("has")]
    public IReadOnlyList<string>? Has { get; init; }

    /// <summary>
    /// Data fields that can be revealed via Enrich Companies, with the credit cost per field. A cost of 0 means the field has already been revealed for this account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("canReveal")]
    public IReadOnlyList<V3CanRevealItem>? CanReveal { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signalTypes")]
    public IReadOnlyList<string>? SignalTypes { get; init; }

    /// <summary>
    /// Per-item error in a batch response
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public V3ItemError? Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
