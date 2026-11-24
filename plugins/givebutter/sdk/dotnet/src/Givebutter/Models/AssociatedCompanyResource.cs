using System.Collections.Generic;
using System.Text.Json.Serialization;
using Givebutter.Core.Models;

namespace Givebutter.Models;

public record AssociatedCompanyResource
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("type")]
    public required string Type { get; init; }

    [JsonPropertyName("company_name")]
    public required string CompanyName { get; init; }

    [JsonPropertyName("name_display")]
    public required string NameDisplay { get; init; }

    [JsonPropertyName("title")]
    public required string Title { get; init; }

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

    [JsonPropertyName("website_url")]
    public required string WebsiteUrl { get; init; }

    [JsonPropertyName("image_url")]
    public required string? ImageUrl { get; init; }

    [JsonPropertyName("emails")]
    public required IReadOnlyDictionary<string, object> Emails { get; init; }

    [JsonPropertyName("phones")]
    public required IReadOnlyDictionary<string, object> Phones { get; init; }

    [JsonPropertyName("primary_email")]
    public required string PrimaryEmail { get; init; }

    [JsonPropertyName("primary_phone")]
    public required string PrimaryPhone { get; init; }

    [JsonPropertyName("is_email_subscribed")]
    public required string IsEmailSubscribed { get; init; }

    [JsonPropertyName("is_phone_subscribed")]
    public required string IsPhoneSubscribed { get; init; }

    [JsonPropertyName("is_address_subscribed")]
    public required string IsAddressSubscribed { get; init; }

    [JsonPropertyName("address_unsubscribed_at")]
    public required string AddressUnsubscribedAt { get; init; }

    [JsonPropertyName("note")]
    public required string Note { get; init; }

    [JsonPropertyName("addresses")]
    public required IReadOnlyList<AddressResource> Addresses { get; init; }

    [JsonPropertyName("primary_address")]
    public required AddressResource PrimaryAddress { get; init; }

    [JsonPropertyName("archived_at")]
    public required string ArchivedAt { get; init; }

    [JsonPropertyName("created_at")]
    public required string CreatedAt { get; init; }

    [JsonPropertyName("updated_at")]
    public required string UpdatedAt { get; init; }

    [JsonPropertyName("first_time_supporter_at")]
    public required string FirstTimeSupporterAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
