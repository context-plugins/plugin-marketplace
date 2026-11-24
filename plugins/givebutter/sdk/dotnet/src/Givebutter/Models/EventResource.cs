using System.Text.Json.Serialization;
using Givebutter.Core.Models;

namespace Givebutter.Models;

public record EventResource
{
    [JsonPropertyName("title")]
    public required string Title { get; init; }

    [JsonPropertyName("type")]
    public required string Type { get; init; }

    [JsonPropertyName("location_name")]
    public required string LocationName { get; init; }

    [JsonPropertyName("address_formatted")]
    public required string AddressFormatted { get; init; }

    [JsonPropertyName("google_place_id")]
    public required string GooglePlaceId { get; init; }

    [JsonPropertyName("start_at")]
    public required string StartAt { get; init; }

    [JsonPropertyName("end_at")]
    public required string EndAt { get; init; }

    [JsonPropertyName("timezone")]
    public required string Timezone { get; init; }

    [JsonPropertyName("details")]
    public required string Details { get; init; }

    [JsonPropertyName("private")]
    public required string Private { get; init; }

    [JsonPropertyName("tickets_required")]
    public required string TicketsRequired { get; init; }

    [JsonPropertyName("livestream")]
    public required string Livestream { get; init; }

    [JsonPropertyName("livestream_start_at")]
    public required string LivestreamStartAt { get; init; }

    [JsonPropertyName("livestream_end_at")]
    public required string LivestreamEndAt { get; init; }

    [JsonPropertyName("created_at")]
    public required string CreatedAt { get; init; }

    [JsonPropertyName("updated_at")]
    public required string UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
