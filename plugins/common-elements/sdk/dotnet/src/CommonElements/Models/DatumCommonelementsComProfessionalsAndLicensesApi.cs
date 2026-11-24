using System;
using System.Text.Json.Serialization;
using CommonElements.Core.Models;

namespace CommonElements.Models;

public record DatumCommonelementsComProfessionalsAndLicensesApi
{
    /// <summary>
    /// License number as issued.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("license_number")]
    public string? LicenseNumber { get; init; }

    /// <summary>
    /// License class and its description.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("license_type")]
    public string? LicenseType { get; init; }

    /// <summary>
    /// License class and its description.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("license_type_desc")]
    public string? LicenseTypeDesc { get; init; }

    /// <summary>
    /// Licensee name and trade name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Licensee name and trade name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dba")]
    public string? Dba { get; init; }

    /// <summary>
    /// Board status verbatim from the source roll.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public string? Status { get; init; }

    /// <summary>
    /// License dates verbatim from the source roll.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("issue_date")]
    public DateTimeOffset? IssueDate { get; init; }

    /// <summary>
    /// License dates verbatim from the source roll.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expiry_date")]
    public DateTimeOffset? ExpiryDate { get; init; }

    /// <summary>
    /// Address of record.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("city")]
    public string? City { get; init; }

    /// <summary>
    /// Address of record.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("county")]
    public string? County { get; init; }

    /// <summary>
    /// Issuing board.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("board")]
    public string? Board { get; init; }

    /// <summary>
    /// Linked Common Elements org, when the licensee resolves to one.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("organization_id")]
    public Guid? OrganizationId { get; init; }

    /// <summary>
    /// True when expiry_date is in the past.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_expired")]
    public bool? IsExpired { get; init; }

    /// <summary>
    /// The trust signal to branch on: status reads current/active/valid/clear AND the license is not past expiry.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_active")]
    public bool? IsActive { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
