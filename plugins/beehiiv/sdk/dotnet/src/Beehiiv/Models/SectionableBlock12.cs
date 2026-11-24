using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record SectionableBlock12
{
    /// <summary>
    /// Discriminator value: content_break
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "content_break";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
