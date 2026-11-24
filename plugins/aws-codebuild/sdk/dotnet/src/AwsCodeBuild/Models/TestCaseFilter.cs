using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Models;

public record TestCaseFilter
{
    /// <summary>
    /// The status used to filter test cases. A TestCaseFilter can have one status. Valid values are: SUCCEEDED FAILED ERROR SKIPPED UNKNOWN
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public string? Status { get; init; }

    /// <summary>
    /// A keyword that is used to filter on the name or the prefix of the test cases. Only test cases where the keyword is a substring of the name or the prefix will be returned.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("keyword")]
    public string? Keyword { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
