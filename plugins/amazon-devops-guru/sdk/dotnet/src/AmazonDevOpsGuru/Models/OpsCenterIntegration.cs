using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;
using AmazonDevOpsGuru.Models.Enums;

namespace AmazonDevOpsGuru.Models;

public record OpsCenterIntegration
{
    /// <summary>
    /// Specifies if DevOps Guru is enabled to create an Amazon Web Services Systems Manager OpsItem for each created insight.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("OptInStatus")]
    public OptInStatus? OptInStatus { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
