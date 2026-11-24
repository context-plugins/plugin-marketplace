using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Airtable.Core.Models;

namespace Airtable.Models;

public record RequestModel
{
    [JsonPropertyName("records")]
    [MaxLength(10)]
    public required IReadOnlyList<Record1> Records { get; init; }

    /// <summary>
    /// If true, the API will attempt to convert string values to the appropriate cell value type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("typecast")]
    public bool? Typecast { get; init; }

    /// <summary>
    /// If true, the response will use field IDs as keys instead of field names.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("returnFieldsByFieldId")]
    public bool? ReturnFieldsByFieldId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
