using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record ErrorResponseError
{
    /// <summary>
    /// Response type for error responses
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "list";

    /// <summary>
    /// Unique identifier for tracking this request
    /// </summary>
    [JsonPropertyName("correlationId")]
    public required Guid CorrelationId { get; init; }

    /// <summary>
    /// Array containing error details
    /// </summary>
    [JsonPropertyName("data")]
    public required IReadOnlyList<ErrorDetail> Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
