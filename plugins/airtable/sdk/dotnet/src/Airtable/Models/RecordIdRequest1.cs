using System.Text.Json.Serialization;
using Airtable.Core.Models;

namespace Airtable.Models;

public record RecordIdRequest1
{
    /// <summary>
    /// A mapping of field names (or field IDs when returnFieldsByFieldId is true) to their cell values. The structure depends on the field types defined in the table schema.
    /// </summary>
    [JsonPropertyName("fields")]
    public required object Fields { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("typecast")]
    public bool? Typecast { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("returnFieldsByFieldId")]
    public bool? ReturnFieldsByFieldId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
