using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonSqs.Core.Models;

namespace AmazonSqs.Models;

public record ListQueueTagsResult
{
    /// <summary>
    /// The list of all tags added to the specified queue.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Tags")]
    public IReadOnlyDictionary<string, string>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
