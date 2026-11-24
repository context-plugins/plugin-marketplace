using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using JuriSign.Core.Models;
using JuriSign.Core.Validation.Attributes;

namespace JuriSign.Models;

public record PublicFormsRequest
{
    [JsonPropertyName("name")]
    [MaxLength(255)]
    public required string Name { get; init; }

    /// <summary>
    /// Template with exactly 1 signer and its own document
    /// </summary>
    [JsonPropertyName("sign_request_template_id")]
    public required Guid SignRequestTemplateId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expires_at")]
    public DateTimeOffset? ExpiresAt { get; init; }

    /// <summary>
    /// Anti-abuse cap; clamped to the platform maximum
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("daily_submission_limit")]
    [Minimum(1)]
    public int? DailySubmissionLimit { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
