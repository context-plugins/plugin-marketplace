using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

/// <summary>
/// Echo of the input parameters
/// </summary>
public record Input
{
    /// <summary>
    /// Echo of the expense value from request
    /// </summary>
    [JsonPropertyName("expense")]
    public required string Expense { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
