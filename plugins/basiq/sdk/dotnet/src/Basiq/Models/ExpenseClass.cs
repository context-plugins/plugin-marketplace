using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

/// <summary>
/// Class represents one class of classification system
/// </summary>
public record ExpenseClass
{
    /// <summary>
    /// Classification code for HEC classification: 4 levels class, group, subdivision and division.
    /// </summary>
    [JsonPropertyName("classCode")]
    public required string ClassCode { get; init; }

    /// <summary>
    /// Classification code for HEC classification: 4 levels class, group, subdivision and division.
    /// </summary>
    [JsonPropertyName("classTitle")]
    public required string ClassTitle { get; init; }

    [JsonPropertyName("divisionCode")]
    public required string DivisionCode { get; init; }

    [JsonPropertyName("divisionTitle")]
    public required string DivisionTitle { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
