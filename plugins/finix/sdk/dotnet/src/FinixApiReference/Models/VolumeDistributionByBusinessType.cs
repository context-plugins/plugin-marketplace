using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// Merchant's distribution of credit card volume by business type. Sum of <c>volume_distribution_by_business_type</c> must be 100.
/// </summary>
public record VolumeDistributionByBusinessType
{
    /// <summary>
    /// The percentage of the merchant's volume that's business to business (between 0 and 100).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("business_to_business_volume_percentage")]
    public int? BusinessToBusinessVolumePercentage { get; init; }

    /// <summary>
    /// The percentage of the merchant's volume that's business to consumer (between 0 and 100).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("business_to_consumer_volume_percentage")]
    public int? BusinessToConsumerVolumePercentage { get; init; }

    /// <summary>
    /// Merchant's percentage of volume that is consumer to consumer (between 0 and 100).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("consumer_to_consumer_volume_percentage")]
    public int? ConsumerToConsumerVolumePercentage { get; init; }

    /// <summary>
    /// The percentage of the merchant's volume that isn't represented by the previous fields (between 0 and 100).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("other_volume_percentage")]
    public int? OtherVolumePercentage { get; init; }

    /// <summary>
    /// The percentage the merchant's volume that's person to person (between 0 and 100).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("person_to_person_volume_percentage")]
    public int? PersonToPersonVolumePercentage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
