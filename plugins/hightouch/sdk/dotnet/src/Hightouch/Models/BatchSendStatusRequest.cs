using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Hightouch.Models;

/// <summary>
/// Request body for the batch send status endpoint.
/// </summary>
public record BatchSendStatusRequest
{
    /// <summary>
    /// <c>sendId</c> values returned by the trigger endpoint.
    /// </summary>
    [JsonPropertyName("sendIds")]
    [MinLength(1)]
    [MaxLength(100)]
    public required IReadOnlyList<string> SendIds { get; init; }
}
