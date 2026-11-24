using System.Collections.Generic;
using System.Text.Json.Serialization;
using Instacart.Core.Models;

namespace Instacart.Models;

public record ItemSubmissionRequest
{
    /// <summary>
    /// The list of items to create or update at specific store locations.
    /// </summary>
    [JsonPropertyName("items")]
    public required IReadOnlyList<Item> Items { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
