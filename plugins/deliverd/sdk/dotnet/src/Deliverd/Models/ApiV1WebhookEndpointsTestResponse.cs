using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ApiV1WebhookEndpointsTestResponse
{
    /// <summary>
    /// Whether the endpoint answered 2xx.
    /// </summary>
    [JsonPropertyName("delivered")]
    public required bool Delivered { get; init; }

    /// <summary>
    /// What it answered. Null when it could not be reached.
    /// </summary>
    [JsonPropertyName("responseStatus")]
    public required int? ResponseStatus { get; init; }

    [JsonPropertyName("error")]
    public required string? Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
