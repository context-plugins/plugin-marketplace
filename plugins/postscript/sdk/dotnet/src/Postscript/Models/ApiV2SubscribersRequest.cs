using System.Collections.Generic;
using System.Text.Json.Serialization;
using Postscript.Core.Models;

namespace Postscript.Models;

public record ApiV2SubscribersRequest
{
    /// <summary>
    /// Email address for the subscriber. <b>Note:</b> when updating an email address, we will only update it if none previously existed on the subscriber or we haven't linked a Shopify customer to them yet. We also can only link a Shopify customer if they already exist, not retrospectively.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    public string? Email { get; init; }

    /// <summary>
    /// Tags you would like to add to the subscriber. <b>Note:</b> tags are additive, so whatever you include here will be added to the existing tags on a subscriber.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyList<string>? Tags { get; init; }

    /// <summary>
    /// Custom properties as key/value pairs. Values can be: strings, integers, string arrays, or ISO 8601 date(time). Subscribers can have up to 50 custom properties. If properties is unset or <c>null</c>, it will be ignored.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("properties")]
    public string? Properties { get; init; } = "{\"key\": \"value\"}";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
