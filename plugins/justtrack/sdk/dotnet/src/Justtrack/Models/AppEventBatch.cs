using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Justtrack.Core.Models;
using Justtrack.Models.AnyOf;

namespace Justtrack.Models;

/// <summary>
/// A batch of AppEvents, all for one app user combination. If one event is invalid, the whole batch is rejected.
/// </summary>
public record AppEventBatch
{
    /// <summary>
    /// 36 character uuid of the batch
    /// </summary>
    [JsonPropertyName("batchId")]
    public required Guid BatchId { get; init; }

    [JsonPropertyName("app")]
    public required App App { get; init; }

    [JsonPropertyName("user")]
    public required User4 User { get; init; }

    [JsonPropertyName("events")]
    public required IReadOnlyList<AppEvent2> Events { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
