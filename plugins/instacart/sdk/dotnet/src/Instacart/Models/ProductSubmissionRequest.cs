using System.Collections.Generic;
using System.Text.Json.Serialization;
using Instacart.Core.Models;

namespace Instacart.Models;

public record ProductSubmissionRequest
{
    /// <summary>
    /// The list of products to create or update.
    /// </summary>
    [JsonPropertyName("products")]
    public required IReadOnlyList<Product> Products { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
