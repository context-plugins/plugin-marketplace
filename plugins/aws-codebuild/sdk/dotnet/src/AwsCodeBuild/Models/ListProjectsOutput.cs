using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Models;

public record ListProjectsOutput
{
    /// <summary>
    /// If there are more than 100 items in the list, only the first 100 items are returned, along with a unique string called a nextToken. To get the next batch of items in the list, call this operation again, adding the next token to the call.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextToken")]
    public string? NextToken { get; init; }

    /// <summary>
    /// The list of build project names, with each build project name representing a single build project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("projects")]
    public IReadOnlyList<string>? Projects { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
