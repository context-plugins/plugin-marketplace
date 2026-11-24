using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Core.Validation;
using DoiT.Core.Validation.Attributes;

namespace DoiT.Models;

/// <summary>
/// RFC 9457 Problem Details — standard DoiT error envelope for all non-2xx responses.
/// </summary>
public record ProblemDetails
{
    [JsonPropertyName("type")]
    [Format(FormatKind.Uri)]
    public required string Type { get; init; }

    [JsonPropertyName("title")]
    public required string Title { get; init; }

    [JsonPropertyName("status")]
    public required int Status { get; init; }

    [JsonPropertyName("detail")]
    public required string Detail { get; init; }

    [JsonPropertyName("instance")]
    [Format(FormatKind.Uri)]
    public required string Instance { get; init; }

    [JsonPropertyName("code")]
    [RegularExpression("^([a-z][a-z0-9_]*|[a-z][a-z0-9]*(?:-[a-z0-9]+)*\\.[a-z][a-z0-9_]*)$")]
    public required string Code { get; init; }

    [JsonPropertyName("retryable")]
    public required bool Retryable { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("details")]
    public IReadOnlyList<Detail>? Details { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("docsUrl")]
    [Format(FormatKind.Uri)]
    public string? DocsUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
