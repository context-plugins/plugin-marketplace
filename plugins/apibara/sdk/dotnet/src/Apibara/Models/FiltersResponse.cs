using System.Text.Json.Serialization;
using Apibara.Core.Models;

namespace Apibara.Models;

public record FiltersResponse
{
    /// <summary>
    /// Available filter values grouped by filter name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public object? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
