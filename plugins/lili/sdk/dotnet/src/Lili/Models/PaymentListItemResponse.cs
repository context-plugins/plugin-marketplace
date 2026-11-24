using System;
using System.Text.Json.Serialization;
using Lili.Core.Models;
using Lili.Models.Enums;

namespace Lili.Models;

public record PaymentListItemResponse
{
    /// <summary>
    /// The payment ID
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paymentId")]
    public string? PaymentId { get; init; }

    /// <summary>
    /// The payment submissiondate
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("submissionDate")]
    public DateTimeOffset? SubmissionDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public Status? Status { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
