using System.Text.Json.Serialization;
using Airtable.Core.Models;

namespace Airtable.Models;

public record Record1
{
    /// <summary>
    /// A mapping of field names (or field IDs when returnFieldsByFieldId is true) to their cell values. The structure depends on the field types defined in the table schema.
    /// </summary>
    [JsonPropertyName("fields")]
    public required object Fields { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
