using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record Dataset
{
    /// <summary>
    /// The name of the dataset.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// The description of the dataset.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// The number of records in the dataset.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("records")]
    public long? Records { get; init; }

    /// <summary>
    /// The email of the user who last updated the dataset.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updatedBy")]
    public string? UpdatedBy { get; init; }

    /// <summary>
    /// The timestamp of the last update.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastUpdated")]
    public string? LastUpdated { get; init; }

    /// <summary>
    /// Human-readable name shown in the DoiT console and in report results instead of <c>name</c>. Absent when the dataset is displayed by its <c>name</c>. Does not affect ingest, which always uses <c>name</c> as the provider.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    public string? DisplayName { get; init; }

    /// <summary>
    /// The preset logo shown next to the dataset in the DoiT console. Absent when the dataset has no preset logo.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("logoName")]
    public string? LogoName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
