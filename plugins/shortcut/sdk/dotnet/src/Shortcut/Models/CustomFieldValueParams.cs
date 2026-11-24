using System;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

public record CustomFieldValueParams
{
    /// <summary>
    /// The unique public ID for the CustomField.
    /// </summary>
    [JsonPropertyName("field_id")]
    public required Guid FieldId { get; init; }

    /// <summary>
    /// The unique public ID for the CustomFieldEnumValue.
    /// </summary>
    [JsonPropertyName("value_id")]
    public required Guid ValueId { get; init; }

    /// <summary>
    /// A literal value for the CustomField. Currently ignored.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public string? Value { get; init; }
}
