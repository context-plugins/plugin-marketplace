using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record FilterValuesResponse
{
    /// <summary>
    /// Filter values (shape depends on filter type)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("values")]
    public object? Values { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
