using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Givebutter.Core.Models;
using Givebutter.Core.Validation;
using Givebutter.Core.Validation.Attributes;
using Givebutter.Models.Enums;

namespace Givebutter.Models;

public record UpdateContactRequest
{
    /// <summary>
    /// Required for individual contacts. Optional for company contacts, which require company_name instead.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("first_name")]
    [MaxLength(255)]
    public string? FirstName { get; init; }

    /// <summary>
    /// Required for individual contacts. Optional for company contacts, which require company_name instead.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_name")]
    [MaxLength(255)]
    public string? LastName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("middle_name")]
    [MaxLength(255)]
    public string? MiddleName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("preferred_name")]
    [StringLength(255, MinimumLength = 1)]
    public string? PreferredName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gender")]
    public GenderEnum? Gender { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pronouns")]
    [StringLength(255, MinimumLength = 1)]
    public string? Pronouns { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("suffix")]
    [MaxLength(32)]
    public string? Suffix { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("prefix")]
    [MaxLength(32)]
    public string? Prefix { get; init; }

    /// <summary>
    /// Determines which fields are required: individual contacts require a name, company contacts require company_name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public ContactType1? Type { get; init; }

    /// <summary>
    /// Required for company contacts. Optional for individual contacts, which require first_name and last_name instead.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("company_name")]
    [MaxLength(255)]
    public string? CompanyName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("employer")]
    [MaxLength(255)]
    public string? Employer { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("company")]
    [MaxLength(255)]
    public string? Company { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    [MaxLength(255)]
    public string? Title { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("twitter_url")]
    public string? TwitterUrl { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linkedin_url")]
    public string? LinkedinUrl { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("facebook_url")]
    public string? FacebookUrl { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tiktok_url")]
    public string? TiktokUrl { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("website_url")]
    [MaxLength(2048)]
    [Format(FormatKind.Uri)]
    public string? WebsiteUrl { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("note")]
    public string? Note { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bio")]
    [MaxLength(2000)]
    public string? Bio { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("external_id")]
    [MaxLength(255)]
    public string? ExternalId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("contact_since")]
    public DateTimeOffset? ContactSince { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dob")]
    public string? Dob { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email_opt_in")]
    public bool? EmailOptIn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sms_opt_in")]
    public bool? SmsOptIn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("address_subscription")]
    public bool? AddressSubscription { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("custom_fields")]
    public IReadOnlyList<string>? CustomFields { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyList<string>? Tags { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("remove_emails")]
    public IReadOnlyList<string>? RemoveEmails { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("remove_phones")]
    public IReadOnlyList<string>? RemovePhones { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("remove_address_ids")]
    public IReadOnlyList<int>? RemoveAddressIds { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("emails")]
    public IReadOnlyList<Email>? Emails { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phones")]
    public IReadOnlyList<Phone>? Phones { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("addresses")]
    public IReadOnlyList<Address1>? Addresses { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
