using System.Text.Json.Serialization;
using CodeQr.Core.Models;

namespace CodeQr.Models;

public record LinksBulkResponse
{
    /// <summary>
    /// The number of links deleted.
    /// </summary>
    [JsonPropertyName("deletedCount")]
    public required double DeletedCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
