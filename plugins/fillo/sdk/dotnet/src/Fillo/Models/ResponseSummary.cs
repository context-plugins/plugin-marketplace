using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Fillo.Core.Models;

namespace Fillo.Models;

public record ResponseSummary
{
    [JsonPropertyName("formId")]
    public required string FormId { get; init; }

    /// <summary>
    /// Accepted responses counted.
    /// </summary>
    [JsonPropertyName("total")]
    public required int Total { get; init; }

    [JsonPropertyName("firstAt")]
    public required DateTimeOffset? FirstAt { get; init; }

    [JsonPropertyName("lastAt")]
    public required DateTimeOffset? LastAt { get; init; }

    [JsonPropertyName("fields")]
    public required IReadOnlyList<Field> Fields { get; init; }

    [JsonPropertyName("recent")]
    public required IReadOnlyList<Recent> Recent { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
