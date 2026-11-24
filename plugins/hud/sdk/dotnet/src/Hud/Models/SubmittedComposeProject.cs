using System.Text.Json.Serialization;
using Hud.Models.AnyOf;

namespace Hud.Models;

/// <summary>
/// Compose document and its optional environment source artifact.
/// </summary>
public record SubmittedComposeProject
{
    /// <summary>
    /// Normalized Compose document transported with a hosted runtime artifact.
    /// </summary>
    [JsonPropertyName("document")]
    public required SubmittedComposeDocument Document { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("root")]
    public Root? Root { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("service_access")]
    public ServiceAccess? ServiceAccess { get; init; }
}
