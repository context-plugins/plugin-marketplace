using System.Text.Json.Serialization;
using Beehiiv.Core.Models;
using Beehiiv.Models.AnyOf;
using Beehiiv.Models.Enums;

namespace Beehiiv.Models;

public record CustomField
{
    /// <summary>
    /// The name of the existing custom field
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// The type of value being stored in the custom field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("kind")]
    public CustomFieldType? Kind { get; init; }

    /// <summary>
    /// The value stored for the subscription
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public CustomFieldDataType? Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
