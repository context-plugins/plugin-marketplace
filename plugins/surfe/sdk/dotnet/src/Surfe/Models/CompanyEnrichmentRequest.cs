using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Surfe.Core.Models;

namespace Surfe.Models;

public record CompanyEnrichmentRequest
{
    /// <summary>
    /// Companies to enrich, identified by domain and/or externalID.
    /// </summary>
    [JsonPropertyName("companies")]
    [MinLength(1)]
    public required IReadOnlyList<Company1> Companies { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("include")]
    public Include? Include { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("notificationOptions")]
    public NotificationOptions? NotificationOptions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
