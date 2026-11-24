using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using JuriSign.Core.Models;
using JuriSign.Core.Validation;
using JuriSign.Core.Validation.Attributes;

namespace JuriSign.Models;

public record TemplatesSignRequestsRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subject")]
    [MaxLength(255)]
    public string? Subject { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("message")]
    [MaxLength(2000)]
    public string? Message { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public object? Metadata { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expiry_hours")]
    [Minimum(1)]
    [Maximum(720)]
    public int? ExpiryHours { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("auto_send")]
    public bool? AutoSend { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("redirect_url")]
    [MaxLength(2048)]
    [Format(FormatKind.Uri)]
    public string? RedirectUrl { get; init; }

    /// <summary>
    /// Required only if the template has no document of its own
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("document_id")]
    public Guid? DocumentId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
