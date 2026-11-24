using System.Collections.Generic;
using System.Text.Json.Serialization;
using Rendex.Core.Models;

namespace Rendex.Models;

public record Data1RendexRenderingWatchApi
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("items")]
    public IReadOnlyList<WatchRun>? Items { get; init; }

    /// <summary>
    /// Pass as cursor to fetch the next page; absent on the last page
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextCursor")]
    public string? NextCursor { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
