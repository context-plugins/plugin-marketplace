using System.Text.Json.Serialization;
using GoogleCloudTalentSolution.Core.Models;
using GoogleCloudTalentSolution.Models.Enums;

namespace GoogleCloudTalentSolution.Models;

/// <summary>
/// Parameters needed for commute search.
/// </summary>
public record CommuteFilter
{
    /// <summary>
    /// Required. The maximum travel time in seconds. The maximum allowed value is <c>3600s</c> (one hour). Format is <c>123s</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("travelDuration")]
    public string? TravelDuration { get; init; }

    /// <summary>
    /// The departure time used to calculate traffic impact, represented as google.type.TimeOfDay in local time zone. Currently traffic model is restricted to hour level resolution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("departureTime")]
    public TimeOfDay1? DepartureTime { get; init; }

    /// <summary>
    /// If <c>true</c>, jobs without street level addresses may also be returned. For city level addresses, the city center is used. For state and coarser level addresses, text matching is used. If this field is set to <c>false</c> or isn't specified, only jobs that include street level addresses will be returned by commute search.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("allowImpreciseAddresses")]
    public bool? AllowImpreciseAddresses { get; init; }

    /// <summary>
    /// Required. The method of transportation to calculate the commute time for.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("commuteMethod")]
    public CommuteMethod? CommuteMethod { get; init; }

    /// <summary>
    /// Required. The latitude and longitude of the location to calculate the commute time from.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startCoordinates")]
    public LatLng2? StartCoordinates { get; init; }

    /// <summary>
    /// Specifies the traffic density to use when calculating commute time.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("roadTraffic")]
    public RoadTraffic? RoadTraffic { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
