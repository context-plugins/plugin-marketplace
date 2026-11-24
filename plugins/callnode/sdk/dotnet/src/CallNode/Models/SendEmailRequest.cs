using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using CallNode.Core.Models;
using CallNode.Core.Validation;
using CallNode.Core.Validation.Attributes;
using CallNode.Models.AnyOf;

namespace CallNode.Models;

public record SendEmailRequest
{
    /// <summary>
    /// <c>Name &lt;address&gt;</c> or a bare address on one of your active sending domains.
    /// </summary>
    [JsonPropertyName("from")]
    public required string From { get; init; }

    /// <summary>
    /// Recipients. With cc and bcc, 50 at most.
    /// </summary>
    [JsonPropertyName("to")]
    public required EmailAddressList To { get; init; }

    /// <summary>
    /// One address or a list. Each may be <c>Name &lt;address&gt;</c> or a bare address.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cc")]
    public EmailAddressList? Cc { get; init; }

    /// <summary>
    /// One address or a list. Each may be <c>Name &lt;address&gt;</c> or a bare address.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bcc")]
    public EmailAddressList? Bcc { get; init; }

    [JsonPropertyName("subject")]
    [StringLength(255, MinimumLength = 1)]
    public required string Subject { get; init; }

    /// <summary>
    /// The HTML part. <c>html</c> or <c>text</c> is required; 2 MB together.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("html")]
    public string? Html { get; init; }

    /// <summary>
    /// The plain-text part.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("text")]
    public string? Text { get; init; }

    /// <summary>
    /// Where replies go: addresses on exactly the From domain (a subdomain counts as a different domain). A reply-to elsewhere answers 400 validation_error before anything is sent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reply_to")]
    public EmailAddressList? ReplyTo { get; init; }

    /// <summary>
    /// Up to 10 custom headers. Names must start <c>X-</c> or <c>List-</c>, or be <c>In-Reply-To</c> / <c>References</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("headers")]
    public IReadOnlyDictionary<string, string>? Headers { get; init; }

    /// <summary>
    /// 10 MB decoded in all. Executables and scripts are refused.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attachments")]
    [MaxLength(10)]
    public IReadOnlyList<Attachment>? Attachments { get; init; }

    /// <summary>
    /// Returned on the message and in every webhook. Names starting <c>cn_</c> are reserved.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    [MaxLength(10)]
    public IReadOnlyList<Tag1>? Tags { get; init; }

    /// <summary>
    /// Receives <c>email.delivered</c> / <c>email.delayed</c> / <c>email.bounced</c> / <c>email.complained</c> / <c>email.failed</c>, signed per attempt with this key's secret (X-Timestamp, X-Signature, X-Event-Source).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("statusWebhookUrl")]
    [Format(FormatKind.Uri)]
    public string? StatusWebhookUrl { get; init; }

    /// <summary>
    /// Up to 4 KB, returned unchanged on the message and in every webhook.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public object? Metadata { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
