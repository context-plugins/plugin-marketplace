using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record Anzsic1
{
    /// <summary>
    /// Details the code and title of the merchant ANZSIC division.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("division")]
    public Division1? Division { get; init; }

    /// <summary>
    /// Details the code and title of the merchant ANZSIC subdivision.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subdivision")]
    public Subdivision1? Subdivision { get; init; }

    /// <summary>
    /// Details the code and title of the merchant ANZSIC group.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("group")]
    public Group1? Group { get; init; }

    /// <summary>
    /// Details the code and title of the merchant ANZSIC class.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("class")]
    public Class1EnrichApi? Class { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subclass")]
    public Subclass? Subclass { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
