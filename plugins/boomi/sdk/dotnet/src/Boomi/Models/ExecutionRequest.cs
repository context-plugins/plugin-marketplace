using System.Collections.Generic;
using System.Text.Json.Serialization;
using Boomi.Core.Models;

namespace Boomi.Models;

/// <summary>
/// Request to execute an integration process on a specific Atom.
/// </summary>
public record ExecutionRequest
{
    /// <summary>
    /// ID of the Atom on which to run the process.
    /// </summary>
    [JsonPropertyName("atomId")]
    public required string AtomId { get; init; }

    /// <summary>
    /// ID of the process to execute.
    /// </summary>
    [JsonPropertyName("processId")]
    public required string ProcessId { get; init; }

    /// <summary>
    /// Optional runtime properties to pass to the process.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("processProperties")]
    public IReadOnlyList<ProcessProperty>? ProcessProperties { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
