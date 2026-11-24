using System.Text.Json.Serialization;
using Beehiiv.Core.Models;
using Beehiiv.Models.AnyOf;

namespace Beehiiv.Models;

/// <summary>
/// The object required for setting custom field values on a subscription
/// </summary>
public record CustomFieldValue
{
    /// <summary>
    /// The name of the existing custom field
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// The value stored for the subscription
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public CustomFieldDataType1? Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
