using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Leadspace.Core.Models;

namespace Leadspace.Models;

public record DiscoveryRequest
{
    /// <summary>
    /// Up to 500 accounts per bulk request
    /// </summary>
    [JsonPropertyName("data")]
    [MaxLength(500)]
    public required IReadOnlyList<DiscoveryItem> Data { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("external_bulk_id")]
    public string? ExternalBulkId { get; init; }

    /// <summary>
    /// URL Leadspace calls back when bulk processing completes
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("callbackUrl")]
    public string? CallbackUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
