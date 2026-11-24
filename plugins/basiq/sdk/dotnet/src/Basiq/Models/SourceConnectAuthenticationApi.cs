using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

/// <summary>
/// An object containing references to the source of the error.
/// </summary>
public record SourceConnectAuthenticationApi
{
    /// <summary>
    /// String indicating which URI query parameter caused the error.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parameter")]
    public string? Parameter { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
