using System;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

public record ValueModelSummary
{
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    [JsonPropertyName("version")]
    public required int Version { get; init; }

    [JsonPropertyName("status")]
    public required ValueModelSummaryStatus Status { get; init; }

    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    [JsonPropertyName("activatedAt")]
    public required DateTimeOffset? ActivatedAt { get; init; }

    [JsonPropertyName("archivedAt")]
    public required DateTimeOffset? ArchivedAt { get; init; }

    [JsonPropertyName("effectiveFrom")]
    public required DateTimeOffset? EffectiveFrom { get; init; }

    [JsonPropertyName("effectiveTo")]
    public required DateTimeOffset? EffectiveTo { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
