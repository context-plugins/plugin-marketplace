using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record Block14
{
    /// <summary>
    /// Discriminator value: content_break
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "content_break";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
