using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;

namespace AmazonDevOpsGuru.Models;

public record UpdateCloudFormationCollectionFilter
{
    /// <summary>
    /// An array of the names of the Amazon Web Services CloudFormation stacks to update. You can specify up to 500 Amazon Web Services CloudFormation stacks.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StackNames")]
    public IReadOnlyList<string>? StackNames { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
