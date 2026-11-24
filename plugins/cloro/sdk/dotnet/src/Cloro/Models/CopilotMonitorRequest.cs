using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Cloro.Models.Enums;

namespace Cloro.Models;

public record CopilotMonitorRequest
{
    /// <summary>
    /// The prompt to send to Copilot
    /// </summary>
    [JsonPropertyName("prompt")]
    [StringLength(10000, MinimumLength = 1)]
    public required string Prompt { get; init; }

    /// <summary>
    /// Country/region code for localized response, using ISO 3166-1 alpha-2 country codes.
    /// </summary>
    [JsonPropertyName("country")]
    public required CountryCode2 Country { get; init; }

    /// <summary>
    /// Optional flags for including additional response formats
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("include")]
    public Include2? Include { get; init; }

    /// <summary>
    /// State code for sub-country geo-targeting (e.g., "CA"). Only valid with country "US". Paid add-on: +2 credits, on top of the base cost and any other add-on (<see href="/guides/providers#state-level-targeting">pricing</see>).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public StateParameter? State { get; init; }
}
