using System.Collections.Generic;
using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// Response Dto for bulk classification employee.
/// </summary>
public record ClassificationEmployeeBulkResponseDto
{
    /// <summary>
    /// List of employees
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("employees")]
    public IReadOnlyList<ClassificationEmployeeResponseDto>? Employees { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
