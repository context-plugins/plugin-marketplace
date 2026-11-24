using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

/// <summary>
/// An error response from the Paid API
/// </summary>
public record ErrorError
{
    /// <summary>
    /// An API error response from the Paid API
    /// </summary>
    [JsonPropertyName("error")]
    public required ApiErrorModel Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
