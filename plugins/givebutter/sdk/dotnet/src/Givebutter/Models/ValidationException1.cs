using System.Collections.Generic;
using System.Text.Json.Serialization;
using Givebutter.Core.Models;

namespace Givebutter.Models;

public record ValidationException1
{
    /// <summary>
    /// Errors overview.
    /// </summary>
    [JsonPropertyName("message")]
    public required string Message { get; init; }

    /// <summary>
    /// A detailed description of each field that failed validation.
    /// </summary>
    [JsonPropertyName("errors")]
    public required IReadOnlyDictionary<string, object> Errors { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
