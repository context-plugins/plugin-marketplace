using System.Text.Json.Serialization;
using Basiq.Core.Models;
using Basiq.Models.Enums;

namespace Basiq.Models;

public record Feature
{
    /// <summary>
    /// The type of feature described.
    /// </summary>
    [JsonPropertyName("featureType")]
    public required FeatureType FeatureType { get; init; }

    /// <summary>
    /// Generic field containing additional information relevant to the featureType specified. Whether mandatory or not is dependent on the value of the featureType.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additionalValue")]
    public string? AdditionalValue { get; init; }

    /// <summary>
    /// Display text providing more information on the feature. Mandatory if the feature type is set to OTHER.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additionalInfo")]
    public string? AdditionalInfo { get; init; }

    /// <summary>
    /// Link to a web page with more information on this feature.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additionalInfoUri")]
    public string? AdditionalInfoUri { get; init; }

    /// <summary>
    /// true if the feature is already activated and false if the feature is available for activation. Defaults to true if absent.
    /// &gt; Note: this is an additional field appended to the feature object defined in the Product Reference payload.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("isActivated")]
    public bool? IsActivated { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
