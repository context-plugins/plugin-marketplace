using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// Update ClassificationEmployee with id request Dto.
/// </summary>
public record UpdateClassificationEmployeeWithIdRequestDto
{
    /// <summary>
    /// BILL-generated ID of the employee. The value begins with <c>emp</c>.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Employee first name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("firstName")]
    public string? FirstName { get; init; }

    /// <summary>
    /// Employee last name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastName")]
    public string? LastName { get; init; }

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
