using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Models;

public record PutResourcePolicyInput
{
    /// <summary>
    /// A JSON-formatted resource policy. For more information, see Sharing a Project and Sharing a Report Group in the CodeBuild User Guide.
    /// </summary>
    [JsonPropertyName("policy")]
    public required string Policy { get; init; }

    /// <summary>
    /// The ARN of the Project or ReportGroup resource you want to associate with a resource policy.
    /// </summary>
    [JsonPropertyName("resourceArn")]
    public required string ResourceArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
