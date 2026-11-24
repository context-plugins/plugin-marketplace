using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using JuriSign.Core.Models;
using JuriSign.Core.Validation.Attributes;
using JuriSign.Models.Enums;

namespace JuriSign.Models;

public record BulkCampaignsRequest
{
    [JsonPropertyName("name")]
    [MaxLength(255)]
    public required string Name { get; init; }

    [JsonPropertyName("bulk_template_id")]
    public required Guid BulkTemplateId { get; init; }

    [JsonPropertyName("expiry_hours")]
    [Minimum(1)]
    [Maximum(720)]
    public required int ExpiryHours { get; init; }

    [JsonPropertyName("otp_channel")]
    public required OtpChannel OtpChannel { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("message")]
    [MaxLength(2000)]
    public string? Message { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("require_selfie")]
    public bool? RequireSelfie { get; init; }

    [JsonPropertyName("recipients")]
    [MinLength(1)]
    public required IReadOnlyList<Recipient> Recipients { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
