using System.Collections.Generic;
using System.Text.Json.Serialization;
using Sapling.Core.Models;

namespace Sapling.Models;

public record ApiV1LangdetectResponse
{
    /// <summary>
    /// Present only for a batch (<c>texts</c>) request: one entry per input text, in input order, each shaped exactly like the single-text response.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("results")]
    public IReadOnlyList<object>? Results { get; init; }

    /// <summary>
    /// Present only when the request sent return_usage: true. characters is the billable character count the request submitted; see the return_usage request field for the exact semantics.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("usage")]
    public Usage? Usage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
