using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record Data
{
    /// <summary>
    /// The ID of the resource (e.g. task) to trigger the rule on.
    /// </summary>
    [JsonPropertyName("resource")]
    public required string Resource { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
