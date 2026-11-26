using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// Create an employee
/// </summary>
public record CreateClassificationEmployeeRequestDto
{
    /// <summary>
    /// Employee first name
    /// </summary>
    [JsonPropertyName("firstName")]
    [MinLength(1)]
    public required string FirstName { get; init; }

    /// <summary>
    /// Employee last name
    /// </summary>
    [JsonPropertyName("lastName")]
    [MinLength(1)]
    public required string LastName { get; init; }

    /// <summary>
    /// Employee short name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shortName")]
    public string? ShortName { get; init; }

    /// <summary>
    /// BILL-generated ID of the parent employee. You can set this field if this employee is a child object.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parentId")]
    public string? ParentId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
