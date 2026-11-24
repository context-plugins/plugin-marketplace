using System.Collections.Generic;
using System.Text.Json.Serialization;
using Givebutter.Core.Models;
using Givebutter.Models.AnyOf;

namespace Givebutter.Models;

public record ContactResource
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("external_id")]
    public required string ExternalId { get; init; }

    [JsonPropertyName("contact_since")]
    public required string ContactSince { get; init; }

    [JsonPropertyName("type")]
    public required string Type { get; init; }

    [JsonPropertyName("prefix")]
    public required string Prefix { get; init; }

    [JsonPropertyName("first_name")]
    public required string FirstName { get; init; }

    [JsonPropertyName("preferred_name")]
    public required string PreferredName { get; init; }

    [JsonPropertyName("middle_name")]
    public required string MiddleName { get; init; }

    [JsonPropertyName("last_name")]
    public required string LastName { get; init; }

    [JsonPropertyName("suffix")]
    public required string Suffix { get; init; }

    [JsonPropertyName("gender")]
    public required string Gender { get; init; }

    [JsonPropertyName("pronouns")]
    public required string Pronouns { get; init; }

    [JsonPropertyName("dob")]
    public required string Dob { get; init; }

    [JsonPropertyName("company")]
    public required string Company { get; init; }

    [JsonPropertyName("employer")]
    public required string Employer { get; init; }

    [JsonPropertyName("company_name")]
    public required string CompanyName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("point_of_contact")]
    public PointOfContact? PointOfContact { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("associated_companies")]
    public IReadOnlyList<AssociatedCompanyResource>? AssociatedCompanies { get; init; }

    [JsonPropertyName("title")]
    public required string Title { get; init; }

    [JsonPropertyName("website_url")]
    public required string WebsiteUrl { get; init; }

    [JsonPropertyName("twitter_url")]
    public required string TwitterUrl { get; init; }

    [JsonPropertyName("linkedin_url")]
    public required string LinkedinUrl { get; init; }

    [JsonPropertyName("facebook_url")]
    public required string FacebookUrl { get; init; }

    [JsonPropertyName("tiktok_url")]
    public required string TiktokUrl { get; init; }

    [JsonPropertyName("instagram_url")]
    public required string InstagramUrl { get; init; }

    [JsonPropertyName("emails")]
    public required IReadOnlyList<EmailResource> Emails { get; init; }

    [JsonPropertyName("phones")]
    public required IReadOnlyList<PhoneResource> Phones { get; init; }

    [JsonPropertyName("primary_email")]
    public required string PrimaryEmail { get; init; }

    [JsonPropertyName("primary_phone")]
    public required string PrimaryPhone { get; init; }

    [JsonPropertyName("note")]
    public required string Note { get; init; }

    [JsonPropertyName("addresses")]
    public required IReadOnlyList<AppHttpResourcesApiAddressResource> Addresses { get; init; }

    [JsonPropertyName("primary_address")]
    public required PrimaryAddress PrimaryAddress { get; init; }

    [JsonPropertyName("last_donation_amount")]
    public required string LastDonationAmount { get; init; }

    [JsonPropertyName("stats")]
    public required Stats Stats { get; init; }

    [JsonPropertyName("tags")]
    public required string Tags { get; init; }

    [JsonPropertyName("custom_fields")]
    public required IReadOnlyList<object> CustomFields { get; init; }

    [JsonPropertyName("external_ids")]
    public required IReadOnlyList<ExternalIdResource> ExternalIds { get; init; }

    [JsonPropertyName("is_email_subscribed")]
    public required string IsEmailSubscribed { get; init; }

    [JsonPropertyName("is_phone_subscribed")]
    public required string IsPhoneSubscribed { get; init; }

    [JsonPropertyName("is_address_subscribed")]
    public required string IsAddressSubscribed { get; init; }

    [JsonPropertyName("email_opt_in")]
    public required string EmailOptIn { get; init; }

    [JsonPropertyName("sms_opt_in")]
    public required string SmsOptIn { get; init; }

    [JsonPropertyName("address_unsubscribed_at")]
    public required string AddressUnsubscribedAt { get; init; }

    [JsonPropertyName("archived_at")]
    public required string ArchivedAt { get; init; }

    [JsonPropertyName("created_at")]
    public required string CreatedAt { get; init; }

    [JsonPropertyName("updated_at")]
    public required string UpdatedAt { get; init; }

    [JsonPropertyName("salutation_name")]
    public required string SalutationName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
