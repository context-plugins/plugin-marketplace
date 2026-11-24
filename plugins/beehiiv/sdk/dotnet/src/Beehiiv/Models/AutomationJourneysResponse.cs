using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record AutomationJourneysResponse
{
    /// <summary>
    /// A subscribers' journey through an automation flow.
    /// </summary>
    [JsonPropertyName("data")]
    public required AutomationJourney Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
