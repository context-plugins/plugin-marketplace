using System.Collections.Generic;
using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

/// <summary>
/// Standard error response. <c>errors</c> maps a field name (or <c>base</c> for errors not tied to a specific field) to an array of human-readable messages.
/// </summary>
public record ErrorError
{
    [JsonPropertyName("errors")]
    public required IReadOnlyDictionary<string, object> Errors { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
