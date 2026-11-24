using System.Text.Json.Serialization;
using Basiq.Core.Models;
using Basiq.Models.Enums;

namespace Basiq.Models;

public record DatumPlatformEventsApi
{
    /// <summary>
    /// Type, always "event".
    /// </summary>
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    /// <summary>
    /// Event identification.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Date the event was created.
    /// </summary>
    [JsonPropertyName("createdDate")]
    public required string CreatedDate { get; init; }

    /// <summary>
    /// The entity associated with the event that has occurred
    /// </summary>
    [JsonPropertyName("entity")]
    public required Entity Entity { get; init; }

    /// <summary>
    /// The type of event that has occurred
    /// </summary>
    [JsonPropertyName("eventType")]
    public required EventType EventType { get; init; }

    /// <summary>
    /// The identifier of the user the event belongs to.
    /// </summary>
    [JsonPropertyName("userId")]
    public required string UserId { get; init; }

    /// <summary>
    /// URL to the data source the event occurred.
    /// </summary>
    [JsonPropertyName("dataRef")]
    public required string DataRef { get; init; }

    /// <summary>
    /// The data associated with the event that has been created.
    /// </summary>
    [JsonPropertyName("data")]
    public required string Data { get; init; }

    [JsonPropertyName("links")]
    public required object Links { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
