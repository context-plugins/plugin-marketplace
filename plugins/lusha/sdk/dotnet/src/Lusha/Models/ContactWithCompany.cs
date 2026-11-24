using System.Collections.Generic;
using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record ContactWithCompany
{
    [JsonPropertyName("companyId")]
    public required double CompanyId { get; init; }

    [JsonPropertyName("firstName")]
    public required string FirstName { get; init; }

    [JsonPropertyName("lastName")]
    public required string LastName { get; init; }

    [JsonPropertyName("fullName")]
    public required string FullName { get; init; }

    /// <summary>
    /// Simple array of email addresses (deprecated - use emailAddresses)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("emails")]
    public IReadOnlyList<string>? Emails { get; init; }

    /// <summary>
    /// Detailed email addresses with metadata
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("emailAddresses")]
    public IReadOnlyList<EmailAddress>? EmailAddresses { get; init; }

    /// <summary>
    /// Simple array of phone numbers (deprecated - use phoneNumbers)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phones")]
    public string? Phones { get; init; }

    /// <summary>
    /// Detailed phone numbers with metadata
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phoneNumbers")]
    public IReadOnlyList<PhoneNumbers>? PhoneNumbers { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("personId")]
    public double? PersonId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("location")]
    public LocationResponse? Location { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("jobTitle")]
    public JobTitleLushaApiDocumentationEnrichmentApi? JobTitle { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("socialLinks")]
    public SocialLinksLushaApiDocumentationEnrichmentApi? SocialLinks { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("jobStartDate")]
    public string? JobStartDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("previousJob")]
    public PreviousJobResponse? PreviousJob { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("contactTags")]
    public IReadOnlyList<ContactTag>? ContactTags { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateDate")]
    public string? UpdateDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linkedinFollowersCount")]
    public int? LinkedinFollowersCount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linkedinConnectionsCount")]
    public int? LinkedinConnectionsCount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linkedinCertifications")]
    public IReadOnlyList<LinkedinCertification>? LinkedinCertifications { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linkedinCourses")]
    public IReadOnlyList<LinkedinCourse>? LinkedinCourses { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linkedinAwards")]
    public IReadOnlyList<LinkedinAward>? LinkedinAwards { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linkedinSkills")]
    public IReadOnlyList<string>? LinkedinSkills { get; init; }

    [JsonPropertyName("company")]
    public required CompanyResponse Company { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
