using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record Initial
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created")]
    public Created? Created { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
