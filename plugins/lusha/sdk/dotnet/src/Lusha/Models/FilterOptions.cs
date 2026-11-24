using System.Collections.Generic;
using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

/// <summary>
/// Available enum values for signal sub-filters. Only present in the <c>company</c> response.
/// </summary>
public record FilterOptions
{
    /// <summary>
    /// Available values for the <c>newsEventTypes</c> filter
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("newsEventTypes")]
    public IReadOnlyList<string>? NewsEventTypes { get; init; }

    /// <summary>
    /// Available values for the <c>hiringByDepartments</c> filter
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hiringByDepartments")]
    public IReadOnlyList<string>? HiringByDepartments { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
