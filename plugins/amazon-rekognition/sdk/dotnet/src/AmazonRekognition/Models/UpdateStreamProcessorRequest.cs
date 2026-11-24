using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;
using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Models;

public record UpdateStreamProcessorRequest
{
    /// <summary>
    /// Name of the stream processor that you want to update.
    /// </summary>
    [JsonPropertyName("Name")]
    public required string Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SettingsForUpdate")]
    public StreamProcessorSettingsForUpdate? SettingsForUpdate { get; init; }

    /// <summary>
    /// Specifies locations in the frames where Amazon Rekognition checks for objects or people. This is an optional parameter for label detection stream processors.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RegionsOfInterestForUpdate")]
    public IReadOnlyList<RegionOfInterest>? RegionsOfInterestForUpdate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DataSharingPreferenceForUpdate")]
    public StreamProcessorDataSharingPreference? DataSharingPreferenceForUpdate { get; init; }

    /// <summary>
    /// A list of parameters you want to delete from the stream processor.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ParametersToDelete")]
    public IReadOnlyList<ParametersToDelete>? ParametersToDelete { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
