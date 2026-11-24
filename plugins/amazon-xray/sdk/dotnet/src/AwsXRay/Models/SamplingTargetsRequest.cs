using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record SamplingTargetsRequest
{
    /// <summary>
    /// Information about rules that the service is using to sample requests.
    /// </summary>
    [JsonPropertyName("SamplingStatisticsDocuments")]
    public required IReadOnlyList<SamplingStatisticsDocument> SamplingStatisticsDocuments { get; init; }

    /// <summary>
    /// Information about rules that the service is using to boost sampling rate.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SamplingBoostStatisticsDocuments")]
    public IReadOnlyList<SamplingBoostStatisticsDocument>? SamplingBoostStatisticsDocuments { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
