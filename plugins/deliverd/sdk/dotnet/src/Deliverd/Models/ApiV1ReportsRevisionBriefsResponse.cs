using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ApiV1ReportsRevisionBriefsResponse
{
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    [JsonPropertyName("reportId")]
    public required Guid ReportId { get; init; }

    [JsonPropertyName("fromVersion")]
    public required int? FromVersion { get; init; }

    [JsonPropertyName("prompt")]
    public required string Prompt { get; init; }

    [JsonPropertyName("threads")]
    public required IReadOnlyList<Thread1> Threads { get; init; }

    [JsonPropertyName("createdAt")]
    public required string CreatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
