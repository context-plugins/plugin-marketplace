using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Hightouch.Models;

/// <summary>
/// Response body for the batch send status endpoint. Results are returned in the
/// same order as the requested <c>sendIds</c>.
/// </summary>
public record BatchSendStatusResponse
{
    /// <summary>
    /// Per-send outcomes, in request order.
    /// </summary>
    [JsonPropertyName("results")]
    public required IReadOnlyList<BatchSendStatusResult> Results { get; init; }
}
