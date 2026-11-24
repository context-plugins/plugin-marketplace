using System.Text.Json.Serialization;
using Cosmic.Core.Models;

namespace Cosmic.Models;

public record RevisionResponse
{
    /// <summary>
    /// An immutable snapshot of an Object at a point in time.
    /// </summary>
    [JsonPropertyName("revision")]
    public required Revision Revision { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
