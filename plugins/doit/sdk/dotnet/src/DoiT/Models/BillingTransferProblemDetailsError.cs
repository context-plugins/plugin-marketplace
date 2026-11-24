using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Core.Validation;
using DoiT.Core.Validation.Attributes;

namespace DoiT.Models;

/// <summary>
/// RFC 7807 problem-detail body returned by Billing Transfer endpoints for 4xx/5xx errors.
/// </summary>
public record BillingTransferProblemDetailsError
{
    /// <summary>
    /// A URI identifying the problem type.
    /// </summary>
    [JsonPropertyName("type")]
    [Format(FormatKind.Uri)]
    public required string Type { get; init; }

    /// <summary>
    /// Short, human-readable summary of the problem type.
    /// </summary>
    [JsonPropertyName("title")]
    public required string Title { get; init; }

    /// <summary>
    /// The HTTP status code repeated in the body.
    /// </summary>
    [JsonPropertyName("status")]
    public required int Status { get; init; }

    /// <summary>
    /// Human-readable explanation specific to this occurrence of the problem.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("detail")]
    public string? Detail { get; init; }

    /// <summary>
    /// Stable machine-readable error code.
    /// </summary>
    [JsonPropertyName("code")]
    public required string Code { get; init; }

    /// <summary>
    /// Whether retrying the same request may succeed without changes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("retryable")]
    public bool? Retryable { get; init; }

    /// <summary>
    /// Present on batch-validation failures; the batch items that failed validation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("invalidItems")]
    public IReadOnlyList<InvalidHandshakeItem>? InvalidItems { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
