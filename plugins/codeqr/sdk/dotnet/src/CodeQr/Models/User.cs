using System.Text.Json.Serialization;
using CodeQr.Core.Models;
using CodeQr.Models.Enums;

namespace CodeQr.Models;

public record User
{
    /// <summary>
    /// The role of the authenticated user in the project.
    /// </summary>
    [JsonPropertyName("role")]
    public required Role Role { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
