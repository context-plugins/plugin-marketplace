using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record Country
{
    /// <summary>
    /// Country name, as documents_create takes it in <c>document[country]</c>
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
