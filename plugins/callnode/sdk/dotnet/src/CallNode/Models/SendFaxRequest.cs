using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using CallNode.Core.Models;
using CallNode.Core.Validation;
using CallNode.Core.Validation.Attributes;
using CallNode.Models.Enums;

namespace CallNode.Models;

public record SendFaxRequest
{
    /// <summary>
    /// Destination fax number.
    /// </summary>
    [JsonPropertyName("to")]
    [RegularExpression("^\\+[1-9]\\d{6,14}$")]
    public required string To { get; init; }

    /// <summary>
    /// One of your active numbers. Printed in the fax header and sent as the station ID.
    /// </summary>
    [JsonPropertyName("from")]
    [RegularExpression("^\\+[1-9]\\d{6,14}$")]
    public required string From { get; init; }

    /// <summary>
    /// The PDF or TIFF as a base64 data URL (<c>data:application/pdf;base64,...</c>) or bare base64. 20 MB, 50 pages.
    /// </summary>
    [JsonPropertyName("document")]
    public required string Document { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filename")]
    [MaxLength(120)]
    public string? Filename { get; init; }

    /// <summary>
    /// fine = 204×196, standard = 204×98.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resolution")]
    public Resolution? Resolution { get; init; } = Resolution.Fine;

    /// <summary>
    /// Header text on every page (letters, digits, space, <c>. _ -</c>). Defaults to your number.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("header")]
    [MaxLength(20)]
    public string? Header { get; init; }

    /// <summary>
    /// Receives <c>fax.completed</c> / <c>fax.failed</c>, signed per attempt with this key's secret (X-Timestamp, X-Signature, X-Event-Source).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("statusWebhookUrl")]
    [Format(FormatKind.Uri)]
    public string? StatusWebhookUrl { get; init; }

    /// <summary>
    /// Returned unchanged on the fax and in every webhook.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public object? Metadata { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
