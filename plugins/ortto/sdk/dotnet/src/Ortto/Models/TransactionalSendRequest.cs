using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Ortto.Core.Models;

namespace Ortto.Models;

public record TransactionalSendRequest
{
    /// <summary>
    /// ID of the transactional email asset to send.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email_id")]
    public string? EmailId { get; init; }

    /// <summary>
    /// When true, the message is sent as a marketing email.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("non_transactional")]
    public bool? NonTransactional { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("merge_by")]
    public IReadOnlyList<string>? MergeBy { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("people")]
    public IReadOnlyList<PersonOrttoTransactionalApi>? People { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("html_body")]
    public string? HtmlBody { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subject")]
    public string? Subject { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attachments")]
    [MaxLength(5)]
    public IReadOnlyList<Attachment>? Attachments { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
