using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record ViewDataResponse
{
    /// <summary>
    /// Result sets keyed by query id. Each value is an array of row objects (column name → value); 64-bit integers are returned as JSON strings to preserve precision.
    /// </summary>
    [JsonPropertyName("data")]
    public required IReadOnlyDictionary<string, object> Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
