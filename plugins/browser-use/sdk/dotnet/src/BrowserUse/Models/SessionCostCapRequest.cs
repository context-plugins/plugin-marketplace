using System.Text.Json.Serialization;
using BrowserUse.Models.AnyOf;

namespace BrowserUse.Models;

/// <summary>
/// Set the maximum spend for the active run in a session.
/// </summary>
public record SessionCostCapRequest
{
    [JsonPropertyName("maxCostUsd")]
    public required Maxcostusd MaxCostUsd { get; init; }
}
