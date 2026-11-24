using System.Text.Json.Serialization;
using StayingApi.Core.Models;

namespace StayingApi.Models;

public record Data1
{
    [JsonPropertyName("jobId")]
    public required string JobId { get; init; }

    [JsonPropertyName("status")]
    public string Status { get; } = "completed";

    /// <summary>
    /// The endpoint payload — the SAME unified schema the synchronous call returns (Property[] | Availability[] | Price | PriceCompare | Review[]).
    /// </summary>
    [JsonPropertyName("result")]
    public required object Result { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
