using System.Text.Json.Serialization;
using Cosmic.Core.Models;

namespace Cosmic.Models;

public record ObjectResponse
{
    /// <summary>
    /// A single piece of content. Which properties are present depends on <c>props</c>.
    /// </summary>
    [JsonPropertyName("object")]
    public required ObjectModel Object { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
