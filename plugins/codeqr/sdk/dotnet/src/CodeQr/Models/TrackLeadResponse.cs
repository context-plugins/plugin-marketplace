using System.Text.Json.Serialization;
using CodeQr.Core.Models;

namespace CodeQr.Models;

public record TrackLeadResponse
{
    [JsonPropertyName("click")]
    public required ClickCodeqrIoTrackApi Click { get; init; }

    [JsonPropertyName("customer")]
    public required CustomerCodeqrIoTrackApi Customer { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
