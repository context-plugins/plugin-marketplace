using System.Collections.Generic;
using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

/// <summary>
/// A request object for use in a batch request.
/// </summary>
public record BatchRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("actions")]
    public IReadOnlyList<BatchRequestAction>? Actions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
