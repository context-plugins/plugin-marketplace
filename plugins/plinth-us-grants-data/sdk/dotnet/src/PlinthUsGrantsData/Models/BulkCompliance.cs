using System.Collections.Generic;
using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Models;

namespace PlinthUsGrantsData.Models;

public record BulkCompliance
{
    /// <summary>
    /// Up to 100 EINs. Any format — normalized per EIN.
    /// </summary>
    [JsonPropertyName("eins")]
    public required IReadOnlyList<string> Eins { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
