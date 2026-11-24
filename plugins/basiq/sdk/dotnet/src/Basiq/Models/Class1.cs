using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

/// <summary>
/// Describes the class(type) of accounts. - transaction - savings - credit-card - mortgage - loan - investment - term-deposit - insurance - foreign - unknown
/// </summary>
public record Class1
{
    /// <summary>
    /// Account type
    /// </summary>
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    /// <summary>
    /// Product name.
    /// </summary>
    [JsonPropertyName("product")]
    public required string Product { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
