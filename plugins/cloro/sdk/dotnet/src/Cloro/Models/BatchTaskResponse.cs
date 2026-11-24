using System.Collections.Generic;
using System.Text.Json.Serialization;
using Cloro.Core.Models;
using Cloro.Models.OneOf;

namespace Cloro.Models;

public record BatchTaskResponse
{
    /// <summary>
    /// Always true for a successfully processed batch (individual tasks may still fail).
    /// </summary>
    [JsonPropertyName("success")]
    public required bool Success { get; init; }

    /// <summary>
    /// Aggregate counts for the batch.
    /// </summary>
    [JsonPropertyName("summary")]
    public required Summary Summary { get; init; }

    /// <summary>
    /// Per-task results preserving the original input order by index.
    /// </summary>
    [JsonPropertyName("results")]
    public required IReadOnlyList<ResultCloroDevAsyncAndCloroDevCountriesAndCloroDevCreditsApi> Results { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
