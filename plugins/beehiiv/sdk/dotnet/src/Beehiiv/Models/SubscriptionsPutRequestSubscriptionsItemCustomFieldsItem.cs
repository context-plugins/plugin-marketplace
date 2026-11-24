using System.Text.Json.Serialization;
using Beehiiv.Core.Models;
using Beehiiv.Models.AnyOf;

namespace Beehiiv.Models;

public record SubscriptionsPutRequestSubscriptionsItemCustomFieldsItem
{
    /// <summary>
    /// The name of the existing custom field
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// The value of the custom field
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public CustomFieldDataType? Value { get; init; }

    /// <summary>
    /// A boolean value to specify whether to delete this custom field entry from the subscription
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("delete")]
    public bool? Delete { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
