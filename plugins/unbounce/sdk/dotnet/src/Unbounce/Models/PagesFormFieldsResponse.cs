using System.Collections.Generic;
using System.Text.Json.Serialization;
using Unbounce.Core.Models;

namespace Unbounce.Models;

public record PagesFormFieldsResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("form_fields")]
    public IReadOnlyList<FormField>? FormFields { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
