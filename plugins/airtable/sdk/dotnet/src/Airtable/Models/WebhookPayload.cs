using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Airtable.Core.Models;

namespace Airtable.Models;

/// <summary>
/// A single webhook payload representing a batch of changes.
/// </summary>
public record WebhookPayload
{
    /// <summary>
    /// The time when the payload was generated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timestamp")]
    public DateTimeOffset? Timestamp { get; init; }

    /// <summary>
    /// The transaction number for this batch of changes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("baseTransactionNumber")]
    public int? BaseTransactionNumber { get; init; }

    /// <summary>
    /// The format version of the payload.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payloadFormat")]
    public string? PayloadFormat { get; init; }

    /// <summary>
    /// Metadata about the action that triggered the webhook.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("actionMetadata")]
    public ActionMetadata? ActionMetadata { get; init; }

    /// <summary>
    /// A mapping of table IDs to their changes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("changedTablesById")]
    public IReadOnlyDictionary<string, ChangedTablesById>? ChangedTablesById { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
