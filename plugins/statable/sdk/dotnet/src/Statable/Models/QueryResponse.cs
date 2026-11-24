using System.Collections.Generic;
using System.Text.Json.Serialization;
using Statable.Core.Models;

namespace Statable.Models;

public record QueryResponse
{
    [JsonPropertyName("results")]
    public required IReadOnlyList<ResultRow> Results { get; init; }

    /// <summary>
    /// Present only on breakdown responses.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("meta")]
    public Meta? Meta { get; init; }

    /// <summary>
    /// Echo of the resolved request.
    /// </summary>
    [JsonPropertyName("query")]
    public required QueryEcho Query { get; init; }

    /// <summary>
    /// True when the site has imported (e.g. GA4) data overlapping the queried window.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("has_import")]
    public bool? HasImport { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
