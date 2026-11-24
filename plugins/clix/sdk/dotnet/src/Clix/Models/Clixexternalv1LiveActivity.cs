using System.Text.Json.Serialization;
using Clix.Core.Models;
using Clix.Models.AnyOf;

namespace Clix.Models;

/// <summary>
/// A live activity to be started on a user device.
/// </summary>
public record Clixexternalv1LiveActivity
{
    /// <summary>
    /// Target device and/or user for the live activity.
    /// </summary>
    [JsonPropertyName("target")]
    public required Clixexternalv1LiveActivityTarget3 Target { get; init; }

    /// <summary>
    /// The name of the ActivityAttributes type defined in your iOS app (e.g., 'DeliveryAttributes').
    /// </summary>
    [JsonPropertyName("attributes_type")]
    public required string AttributesType { get; init; }

    /// <summary>
    /// Initial values for ActivityAttributes (static data that doesn't change).
    /// </summary>
    [JsonPropertyName("attributes")]
    public required object Attributes { get; init; }

    /// <summary>
    /// Initial values for ContentState (dynamic data that updates in real-time).
    /// </summary>
    [JsonPropertyName("content_state")]
    public required object ContentState { get; init; }

    /// <summary>
    /// Push notification alert displayed when the Live Activity starts. If not provided, defaults to title: 'Live Activity', body: 'Started'.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("alert")]
    public Clixexternalv1LiveActivityAlert1? Alert { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
