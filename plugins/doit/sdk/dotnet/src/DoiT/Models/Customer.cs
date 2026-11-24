using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Customer scoped to the authenticated tenant, including its settings and contact info.
/// </summary>
public record Customer
{
    /// <summary>
    /// Customer ID.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Customer name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Customer's primary domain.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("primaryDomain")]
    public string? PrimaryDomain { get; init; }

    /// <summary>
    /// Domains associated with the customer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("domains")]
    public IReadOnlyList<string>? Domains { get; init; }

    /// <summary>
    /// The customer's active URL display name, used in Console URLs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("urlSlug")]
    public string? UrlSlug { get; init; }

    /// <summary>
    /// Customer settings. Shared by the <c>getCustomer</c> response and the <c>updateCustomer</c> request body so a value is always read and written at the same path.
    /// <para>
    /// <c>currency</c> accepts only the listed codes; any other value is rejected with <c>400</c>. Unlike <c>urlSlug</c> and <c>allowedInviteDomains</c> it cannot be cleared - no value unsets it.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("settings")]
    public CustomerSettings? Settings { get; init; }

    /// <summary>
    /// Customer point-of-contact details. Shared by the <c>getCustomer</c> response and the <c>updateCustomer</c> request body so a value is always read and written at the same path.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("contact")]
    public CustomerContact? Contact { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
