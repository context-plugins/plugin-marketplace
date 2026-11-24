using System.Collections.Generic;
using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

/// <summary>
/// Errors that occurred during purchase
/// </summary>
public record Errors1
{
    [JsonPropertyName("base")]
    public required IReadOnlyList<string> Base { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
