using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Applike.Core.Models;

namespace Applike.Models;

public record BatchErrorResponse
{
    /// <summary>
    /// 36 character uuid of the batch
    /// </summary>
    [JsonPropertyName("batchId")]
    public required Guid BatchId { get; init; }

    /// <summary>
    /// description of the error
    /// </summary>
    [JsonPropertyName("error")]
    [MinLength(1)]
    public required string Error { get; init; }

    /// <summary>
    /// The HTTP status code
    /// </summary>
    [JsonPropertyName("statusCode")]
    public required int StatusCode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
