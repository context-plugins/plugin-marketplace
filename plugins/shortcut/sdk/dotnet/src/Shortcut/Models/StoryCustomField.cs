using System;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

public record StoryCustomField
{
    /// <summary>
    /// The unique public ID for a CustomField.
    /// </summary>
    [JsonPropertyName("field_id")]
    public required Guid FieldId { get; init; }

    /// <summary>
    /// The unique public ID for a CustomFieldEnumValue.
    /// </summary>
    [JsonPropertyName("value_id")]
    public required Guid ValueId { get; init; }

    /// <summary>
    /// A string representation of the value, if applicable.
    /// </summary>
    [JsonPropertyName("value")]
    public required string Value { get; init; }
}
