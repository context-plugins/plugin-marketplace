using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// Create a department
/// </summary>
public record CreateClassificationDepartmentRequestDto
{
    /// <summary>
    /// Department name
    /// </summary>
    [JsonPropertyName("name")]
    [MinLength(1)]
    public required string Name { get; init; }

    /// <summary>
    /// Department short name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shortName")]
    public string? ShortName { get; init; }

    /// <summary>
    /// Department description
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// BILL-generated ID of the parent department. You can set this field if this department is a child object.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parentId")]
    public string? ParentId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
