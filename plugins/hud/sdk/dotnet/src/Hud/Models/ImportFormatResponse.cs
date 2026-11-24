using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.AnyOf;

namespace Hud.Models;

public record ImportFormatResponse
{
    [JsonPropertyName("format")]
    public string Format { get; } = "harbor";

    [JsonPropertyName("title")]
    public required string Title { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public Description? Description { get; init; }

    /// <summary>
    /// The largest bundle an import of this format takes
    /// </summary>
    [JsonPropertyName("max_input_bytes")]
    public required int MaxInputBytes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
