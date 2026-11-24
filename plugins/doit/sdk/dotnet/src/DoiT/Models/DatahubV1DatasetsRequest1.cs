using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record DatahubV1DatasetsRequest1
{
    /// <summary>
    /// List of dataset names to delete.
    /// </summary>
    [JsonPropertyName("datasets")]
    public required IReadOnlyList<string> Datasets { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
