using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using UiPath.Core.Models;

namespace UiPath.Models;

/// <summary>
/// Request payload for creating a new test case
/// </summary>
public record CreateTestCaseRequest
{
    /// <summary>
    /// Display name for the new test case
    /// </summary>
    [JsonPropertyName("name")]
    [MaxLength(512)]
    public required string Name { get; init; }

    /// <summary>
    /// Description of the test scenario
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Labels to apply to the test case
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("labels")]
    public IReadOnlyList<string>? Labels { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
