using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record VerdictDeliverdDevReviewsApi
{
    [JsonPropertyName("verdict")]
    public required Verdict1DeliverdDevReviewsApi Verdict { get; init; }

    [JsonPropertyName("by")]
    public required string By { get; init; }

    [JsonPropertyName("note")]
    public required string? Note { get; init; }

    [JsonPropertyName("at")]
    public required string At { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
