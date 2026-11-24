using System.Collections.Generic;
using System.Text.Json.Serialization;
using Statable.Core.Models;

namespace Statable.Models;

public record PropsResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("props")]
    public IReadOnlyList<Prop>? Props { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
