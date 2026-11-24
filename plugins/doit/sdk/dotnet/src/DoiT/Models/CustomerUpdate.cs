using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Partial update to a customer's general settings. Every field is optional; only fields present in the request body are changed. Fields are nested exactly as the <c>getCustomer</c> response nests them. See the operation description for <c>urlSlug</c>'s null-vs-absent semantics, which differ from every other field.
/// </summary>
public record CustomerUpdate
{
    /// <summary>
    /// The customer's URL display name. An explicit empty string removes the active slug; a non-empty value must be 3-12 characters of lowercase letters, digits, or dashes, starting and ending with a letter or digit, and must be unique across all customers.
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
