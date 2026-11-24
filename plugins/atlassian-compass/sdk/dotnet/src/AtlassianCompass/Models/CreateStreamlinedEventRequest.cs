using System.Text.Json.Serialization;
using AtlassianCompass.Core.Models;

namespace AtlassianCompass.Models;

public record CreateStreamlinedEventRequest
{
    [JsonPropertyName("cloudId")]
    public required string CloudId { get; init; }

    /// <summary>
    /// The type of event. One and only one of the fields in this input type must be provided.
    /// </summary>
    [JsonPropertyName("event")]
    public required CompassEventInputDto Event { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("componentId")]
    public string? ComponentId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
