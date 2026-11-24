using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record ProjectsSectionsResponse1
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public SectionResponse? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
