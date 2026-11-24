using System.Text.Json.Serialization;
using Contentstack.Core.Models;

namespace Contentstack.Models;

/// <summary>
/// Parameters for creating a new stack.
/// </summary>
public record CreateStackRequest
{
    [JsonPropertyName("stack")]
    public required Stack2 Stack { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
