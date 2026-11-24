using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;

namespace AmazonDevOpsGuru.Models;

public record RecommendationRelatedAnomalyResource
{
    /// <summary>
    /// The name of the resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Name")]
    public string? Name { get; init; }

    /// <summary>
    /// The type of the resource. Resource types take the same form that is used by Amazon Web Services CloudFormation resource type identifiers, service-provider::service-name::data-type-name. For example, AWS::RDS::DBCluster. For more information, see Amazon Web Services resource and property types reference in the Amazon Web Services CloudFormation User Guide.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Type")]
    public string? Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
