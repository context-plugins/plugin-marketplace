using System.Text.Json.Serialization;
using Fillo.Core.Models;

namespace Fillo.Models;

public record File
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Bytes.
    /// </summary>
    [JsonPropertyName("size")]
    public required int Size { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
