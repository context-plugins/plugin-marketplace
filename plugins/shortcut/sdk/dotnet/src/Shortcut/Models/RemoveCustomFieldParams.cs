using System;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

public record RemoveCustomFieldParams
{
    /// <summary>
    /// The unique public ID for the CustomField.
    /// </summary>
    [JsonPropertyName("field_id")]
    public required Guid FieldId { get; init; }
}
