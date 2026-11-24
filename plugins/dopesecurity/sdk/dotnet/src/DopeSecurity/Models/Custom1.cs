using System.Collections.Generic;
using System.Text.Json.Serialization;
using DopeSecurity.Core.Models;

namespace DopeSecurity.Models;

public record Custom1
{
    /// <summary>
    /// List of URL names to delete
    /// </summary>
    [JsonPropertyName("urls")]
    public required IReadOnlyList<string> Urls { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
