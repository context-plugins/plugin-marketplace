using System.Text.Json.Serialization;
using Shortcut.Core.Models;

namespace Shortcut.Models;

/// <summary>
/// Error returned when total maximum supported results have been reached.
/// </summary>
public record MaxSearchResultsExceededErrorError
{
    /// <summary>
    /// The name for this type of error, <c>maximum-results-exceeded</c>
    /// </summary>
    [JsonPropertyName("error")]
    public string Error { get; } = "maximum-results-exceeded";

    /// <summary>
    /// An explanatory message: "A maximum of 1000 search results are supported."
    /// </summary>
    [JsonPropertyName("message")]
    public required string Message { get; init; }

    /// <summary>
    /// The maximum number of search results supported, <c>1000</c>
    /// </summary>
    [JsonPropertyName("maximum-results")]
    public int MaximumResults { get; } = 1000;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
