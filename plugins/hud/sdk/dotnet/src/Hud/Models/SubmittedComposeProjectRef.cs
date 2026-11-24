using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

/// <summary>
/// Build-context location inside the selected environment source artifact.
/// </summary>
public record SubmittedComposeProjectRef
{
    [JsonPropertyName("compose_path")]
    [MinLength(1)]
    public required string ComposePath { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
