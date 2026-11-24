using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;
using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Models;

public record ListCommandExecutionsForSandboxInput
{
    /// <summary>
    /// A sandboxId or sandboxArn.
    /// </summary>
    [JsonPropertyName("sandboxId")]
    public required string SandboxId { get; init; }

    /// <summary>
    /// The maximum number of sandbox records to be retrieved.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxResults")]
    public int? MaxResults { get; init; }

    /// <summary>
    /// The order in which sandbox records should be retrieved.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sortOrder")]
    public SortOrderAwsCodeBuildCommandExecutionApi? SortOrder { get; init; }

    /// <summary>
    /// The next token, if any, to get paginated results. You will get this value from previous execution of list sandboxes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
