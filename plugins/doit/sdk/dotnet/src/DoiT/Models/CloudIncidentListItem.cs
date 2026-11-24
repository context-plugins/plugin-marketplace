using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Summary information for a cloud incident.
/// </summary>
public record CloudIncidentListItem
{
    /// <summary>
    /// The creation time of this cloud incident, in milliseconds since the epoch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public long? CreateTime { get; init; }

    /// <summary>
    /// The unique cloud incident identifier.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// The Cloud Platform.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("platform")]
    public Platform? Platform { get; init; }

    /// <summary>
    /// The name of the product affected by the cloud incident
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("product")]
    public string? Product { get; init; }

    /// <summary>
    /// The Status of the issue
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public StatusDoiTCloudIncidentsApi? Status { get; init; }

    /// <summary>
    /// Cloud incident name as provided by the cloud platform vendor
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
