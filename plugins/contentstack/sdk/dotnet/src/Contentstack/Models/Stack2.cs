using System.Text.Json.Serialization;
using Contentstack.Core.Models;

namespace Contentstack.Models;

public record Stack2
{
    /// <summary>
    /// Display name for the new stack.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Default locale code for the stack (e.g., en-us).
    /// </summary>
    [JsonPropertyName("master_locale")]
    public required string MasterLocale { get; init; }

    /// <summary>
    /// Description of the stack's purpose.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
