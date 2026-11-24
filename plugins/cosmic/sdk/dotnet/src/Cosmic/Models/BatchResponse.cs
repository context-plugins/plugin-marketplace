using System.Collections.Generic;
using System.Text.Json.Serialization;
using Cosmic.Core.Models;

namespace Cosmic.Models;

/// <summary>
/// Results in request order. Operations succeed or fail independently, so check each <c>status</c>.
/// </summary>
public record BatchResponse
{
    [JsonPropertyName("operations")]
    public required IReadOnlyList<Operation> Operations { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
