using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Rendex.Core.Models;
using Rendex.Core.Validation;
using Rendex.Core.Validation.Attributes;

namespace Rendex.Models;

public record BatchRequest
{
    /// <summary>
    /// List of URLs to capture (each item can override defaults)
    /// </summary>
    [JsonPropertyName("urls")]
    [MinLength(1)]
    [MaxLength(500)]
    public required IReadOnlyList<Url> Urls { get; init; }

    /// <summary>
    /// Provide exactly one of <c>url</c>, <c>html</c>, or <c>markdown</c> (mutually exclusive). If none is
    /// provided, the request will fail with a validation error.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("defaults")]
    public ScreenshotRequest? Defaults { get; init; }

    /// <summary>
    /// URL to receive a webhook notification when the batch completes (Starter+ channel; Free/Basic poll GET /v1/batches/{batchId} instead).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("webhookUrl")]
    [Format(FormatKind.Uri)]
    public string? WebhookUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
