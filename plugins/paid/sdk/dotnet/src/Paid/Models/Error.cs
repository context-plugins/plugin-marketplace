using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

/// <summary>
/// An error response from the Paid API
/// </summary>
public record Error
{
    /// <summary>
    /// An API error response from the Paid API
    /// </summary>
    [JsonPropertyName("error")]
    public required ApiErrorModel ErrorValue { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
