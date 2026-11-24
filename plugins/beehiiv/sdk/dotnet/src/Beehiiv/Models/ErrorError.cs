using System.Collections.Generic;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

/// <summary>
/// The top level error response.
/// </summary>
public record ErrorError
{
    [JsonPropertyName("status")]
    public required int Status { get; init; }

    [JsonPropertyName("statusText")]
    public required string StatusText { get; init; }

    [JsonPropertyName("errors")]
    public required IReadOnlyList<ErrorDetail> Errors { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
