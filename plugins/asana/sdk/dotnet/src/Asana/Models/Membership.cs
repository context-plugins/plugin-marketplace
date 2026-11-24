using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record Membership
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("project")]
    public ProjectCompact? Project { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("section")]
    public SectionCompact? Section { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
