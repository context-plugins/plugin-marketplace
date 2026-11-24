using System.Collections.Generic;
using System.Text.Json.Serialization;
using Airtable.Core.Models;

namespace Airtable.Models;

/// <summary>
/// A paginated list of webhook payloads.
/// </summary>
public record WebhookPayloadList
{
    [JsonPropertyName("payloads")]
    public required IReadOnlyList<WebhookPayload> Payloads { get; init; }

    /// <summary>
    /// The cursor for fetching the next page of payloads.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cursor")]
    public int? Cursor { get; init; }

    /// <summary>
    /// Whether there may be more payloads to fetch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mightHaveMore")]
    public bool? MightHaveMore { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
