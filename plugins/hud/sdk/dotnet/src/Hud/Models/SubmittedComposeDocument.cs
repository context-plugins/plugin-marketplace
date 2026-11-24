using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Core.Validation.Attributes;

namespace Hud.Models;

/// <summary>
/// Normalized Compose document transported with a hosted runtime artifact.
/// </summary>
public record SubmittedComposeDocument
{
    [JsonPropertyName("services")]
    [MinProperties(1)]
    public required IReadOnlyDictionary<string, SubmittedComposeService> Services { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
