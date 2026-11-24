using System.Text.Json.Serialization;
using SalesforceServiceCloud.Core.Models;
using SalesforceServiceCloud.Models.Enums;

namespace SalesforceServiceCloud.Models;

public record Referrer
{
    /// <summary>
    /// Referrer type.
    /// </summary>
    [JsonPropertyName("type")]
    public required Type1 Type { get; init; }

    /// <summary>
    /// ID of referrer.
    /// </summary>
    [JsonPropertyName("value")]
    public required string Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
