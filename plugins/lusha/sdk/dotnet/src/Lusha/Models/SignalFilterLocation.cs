using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

/// <summary>
/// Location filter for hiring signals. <c>country</c> is required; <c>state</c> is optional.
/// </summary>
public record SignalFilterLocation
{
    [JsonPropertyName("country")]
    public required string Country { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public string? State { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
