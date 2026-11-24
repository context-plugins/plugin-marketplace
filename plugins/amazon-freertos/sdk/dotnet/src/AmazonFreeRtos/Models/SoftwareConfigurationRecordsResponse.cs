using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonFreeRtos.Core.Models;

namespace AmazonFreeRtos.Models;

public record SoftwareConfigurationRecordsResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("softwareConfigurationList")]
    public IReadOnlyList<SoftwareConfigurationSummary>? SoftwareConfigurationList { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
