using System.Text.Json.Serialization;
using Beehiiv.Core.Models;
using Beehiiv.Models.Enums;

namespace Beehiiv.Models;

public record CustomFieldValueBeehiivWebhooksApi
{
    /// <summary>
    /// The display name of the custom field.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The type of the custom field.
    /// </summary>
    [JsonPropertyName("kind")]
    public required CustomFieldKind Kind { get; init; }

    /// <summary>
    /// The formatted value of the custom field. The actual JSON type depends on the kind: - string: the value as a string - integer, number: the value as a number (JSON number type) - boolean: true or false (JSON boolean type) - date: formatted date string (e.g., "Jan 15, 2024") - datetime: formatted date and time string (e.g., "Jan 15, 2024 3:45 PM") - list: comma-separated values as a string
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public string? Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
