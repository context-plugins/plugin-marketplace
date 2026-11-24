using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// Create a job
/// </summary>
public record CreateClassificationJobRequestDto
{
    /// <summary>
    /// Job name
    /// </summary>
    [JsonPropertyName("name")]
    [MinLength(1)]
    public required string Name { get; init; }

    /// <summary>
    /// Job short name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shortName")]
    public string? ShortName { get; init; }

    /// <summary>
    /// Job description
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// BILL-generated ID of the parent job. You can set this field if this job is a child object.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parentId")]
    public string? ParentId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
