using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

public record V1StatesResponse
{
    /// <summary>
    /// USPS two-letter state code
    /// </summary>
    [JsonPropertyName("code")]
    public required string Code { get; init; }

    /// <summary>
    /// Full state name
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
