using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// Issue contains the details of a single issue found by the linter.
/// </summary>
public record GoogleCloudApihubV1Issue
{
    /// <summary>
    /// Required. Human-readable message describing the issue found by the linter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("message")]
    public string? Message { get; init; }

    /// <summary>
    /// Required. Severity level of the rule violation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("severity")]
    public SeverityApigeeProjectsApi? Severity { get; init; }

    /// <summary>
    /// Required. Object describing where in the file the issue was found.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("range")]
    public GoogleCloudApihubV1Range2? Range { get; init; }

    /// <summary>
    /// Required. Rule code unique to each rule defined in linter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("code")]
    public string? Code { get; init; }

    /// <summary>
    /// Required. An array of strings indicating the location in the analyzed document where the rule was triggered.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("path")]
    public IReadOnlyList<string>? Path { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
