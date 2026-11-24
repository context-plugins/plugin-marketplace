using System.Collections.Generic;
using System.Text.Json.Serialization;
using Airtable.Core.Models;

namespace Airtable.Models;

public record ResponseModel
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("records")]
    public IReadOnlyList<Record>? Records { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
