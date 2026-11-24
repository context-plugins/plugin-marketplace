using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using StayingApi.Core.Models;
using StayingApi.Core.Validation;
using StayingApi.Core.Validation.Attributes;
using StayingApi.Models.Enums;

namespace StayingApi.Models;

/// <summary>
/// The canonical error object (§6.4). <c>code</c> is the SINGLE source of truth for error sub-codes.
/// </summary>
public record Error
{
    [JsonPropertyName("type")]
    public required TypeEnum Type { get; init; }

    /// <summary>
    /// Error sub-code; each has a docs page at https://stayingapi.com/docs/errors/&lt;code&gt;.
    /// </summary>
    [JsonPropertyName("code")]
    public required Code Code { get; init; }

    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("param")]
    public string? Param { get; init; }

    [JsonPropertyName("requestId")]
    [RegularExpression("^req_[0-9A-HJKMNP-TV-Z]{26}$")]
    public required string RequestId { get; init; }

    /// <summary>
    /// Errors never bill (always 0).
    /// </summary>
    [JsonPropertyName("creditsCharged")]
    public int CreditsCharged { get; } = 0;

    [JsonPropertyName("retryable")]
    public required bool Retryable { get; init; }

    [JsonPropertyName("docUrl")]
    [Format(FormatKind.Uri)]
    public required string DocUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
