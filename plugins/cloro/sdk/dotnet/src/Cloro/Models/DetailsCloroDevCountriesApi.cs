using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

public record DetailsCloroDevCountriesApi
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
