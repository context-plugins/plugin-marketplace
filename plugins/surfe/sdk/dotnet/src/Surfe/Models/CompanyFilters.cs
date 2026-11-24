using System.Collections.Generic;
using System.Text.Json.Serialization;
using Surfe.Core.Models;

namespace Surfe.Models;

/// <summary>
/// Company-based filters.
/// </summary>
public record CompanyFilters
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("industries")]
    public IReadOnlyList<string>? Industries { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("employeeCount")]
    public RangeModel? EmployeeCount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("revenue")]
    public RangeModel? Revenue { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("countries")]
    public IReadOnlyList<string>? Countries { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("domains")]
    public IReadOnlyList<string>? Domains { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("keywords")]
    public IReadOnlyList<string>? Keywords { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
