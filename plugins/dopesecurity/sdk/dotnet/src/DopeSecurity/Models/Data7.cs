using System.Text.Json.Serialization;
using DopeSecurity.Core.Models;

namespace DopeSecurity.Models;

public record Data7
{
    /// <summary>
    /// Whether the application bypass configuration is inherited from the base policy
    /// </summary>
    [JsonPropertyName("inheritsFromBase")]
    public required bool InheritsFromBase { get; init; }

    /// <summary>
    /// Custom application bypass entries defined by the admin
    /// </summary>
    [JsonPropertyName("custom")]
    public required Custom2 Custom { get; init; }

    /// <summary>
    /// Default application bypass entries with their toggle states
    /// </summary>
    [JsonPropertyName("default")]
    public required Default1 Default { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
