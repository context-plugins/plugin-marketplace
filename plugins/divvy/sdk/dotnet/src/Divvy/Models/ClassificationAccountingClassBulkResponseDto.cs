using System.Collections.Generic;
using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// Response Dto for bulk classification accounting class.
/// </summary>
public record ClassificationAccountingClassBulkResponseDto
{
    /// <summary>
    /// List of accounting classes
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("accountingClasses")]
    public IReadOnlyList<ClassificationAccountingClassResponseDto>? AccountingClasses { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
