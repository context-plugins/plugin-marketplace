using System.Collections.Generic;
using System.Text.Json.Serialization;
using UiPath.Core.Models;

namespace UiPath.Models;

public record AppinventoryRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("applications")]
    public IReadOnlyList<Application>? Applications { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
