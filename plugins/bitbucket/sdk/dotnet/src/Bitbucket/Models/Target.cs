using System.Text.Json.Serialization;
using Bitbucket.Core.Models;
using Bitbucket.Models.AllOf;

namespace Bitbucket.Models;

/// <summary>
/// The target on which the schedule will be executed.
/// </summary>
public record Target
{
    [JsonPropertyName("selector")]
    public required PipelineSelector Selector { get; init; }

    /// <summary>
    /// The name of the reference.
    /// </summary>
    [JsonPropertyName("ref_name")]
    public required string RefName { get; init; }

    /// <summary>
    /// The type of reference (branch only).
    /// </summary>
    [JsonPropertyName("ref_type")]
    public string RefType { get; } = "branch";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
