using System.Collections.Generic;
using System.Text.Json.Serialization;
using Statable.Core.Models;

namespace Statable.Models;

/// <summary>
/// ISO 3166-1 alpha-2 codes. Replaces both lists.
/// </summary>
public record CountryListRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("allowed")]
    public IReadOnlyList<string>? Allowed { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("blocked")]
    public IReadOnlyList<string>? Blocked { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
