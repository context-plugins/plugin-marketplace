using System.Text.Json.Serialization;
using Postscript.Core.Models;

namespace Postscript.Models;

public record ApiV2ComplianceRedactRequest
{
    /// <summary>
    /// ID of the subscriber you'd like to redact.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("postscript_subscriber_id")]
    public string? PostscriptSubscriberId { get; init; }

    /// <summary>
    /// A shopify customer id of the subscriber you'd like to redact.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shopify_customer_id")]
    public string? ShopifyCustomerId { get; init; }

    /// <summary>
    /// An email of the subscriber you'd like to redact.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    public string? Email { get; init; }

    /// <summary>
    /// A phone number of the subscriber you'd like to redact.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phone_number")]
    public string? PhoneNumber { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
