using System.Collections.Generic;
using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Models;

namespace PlinthUsGrantsData.Models;

public record ApiV1SearchResponse
{
    /// <summary>
    /// The matching mode actually served. Always <c>text</c> today: the vector index is unpopulated, so semantic matching is not offered and the <c>mode</c> REQUEST parameter is deliberately not part of this contract. Sending one is not an error — it comes back named in <c>x_plinth.warnings</c>. Present on EVERY response, including errors and the too-short-query case.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mode")]
    public string? Mode { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("results")]
    public IReadOnlyList<Result1>? Results { get; init; }

    /// <summary>
    /// Present only when something needs saying: <c>warnings[]</c> names any parameter this endpoint does not accept or could not honour, and <c>unsupported[]</c> lists the fatal ones. Same shape as the grant endpoints.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("x_plinth")]
    public XPlinthPlinthUsGrantsDataResolveApi? XPlinth { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
