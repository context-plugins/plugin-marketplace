using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Models;

namespace PlinthUsGrantsData.Models;

public record VerifyReport
{
    /// <summary>
    /// A retained compliance response, exactly as returned.
    /// </summary>
    [JsonPropertyName("body")]
    public required object Body { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
