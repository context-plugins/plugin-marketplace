using System.Collections.Generic;
using System.Text.Json.Serialization;
using CommonElements.Core.Models;

namespace CommonElements.Models;

public record DatumCommonelementsComBulkDeliveryApi
{
    /// <summary>
    /// Stable key to pass as <c>dataset</c> when requesting a delivery.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dataset_key")]
    public string? DatasetKey { get; init; }

    /// <summary>
    /// Dataset name, for display.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("label")]
    public string? Label { get; init; }

    /// <summary>
    /// What the dataset contains.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Scopes a key must carry to request it.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("required_scopes")]
    public IReadOnlyList<string>? RequiredScopes { get; init; }

    /// <summary>
    /// Plan feature the dataset sits behind.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("required_feature")]
    public string? RequiredFeature { get; init; }

    /// <summary>
    /// Whether the dataset can be delivered as a full snapshot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("supports_snapshot")]
    public bool? SupportsSnapshot { get; init; }

    /// <summary>
    /// Whether the key on this request may request it, resolved at request time.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("available_to_you")]
    public bool? AvailableToYou { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
