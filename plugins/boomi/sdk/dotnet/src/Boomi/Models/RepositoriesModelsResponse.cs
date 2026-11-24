using System.Collections.Generic;
using System.Text.Json.Serialization;
using Boomi.Core.Models;

namespace Boomi.Models;

public record RepositoriesModelsResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("models")]
    public IReadOnlyList<Model>? Models { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
