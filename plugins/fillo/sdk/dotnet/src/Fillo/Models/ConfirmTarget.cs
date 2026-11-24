using System.Text.Json.Serialization;
using Fillo.Core.Models;

namespace Fillo.Models;

/// <summary>
/// The typed confirmation a destructive (Tier C) operation requires. A mismatch is 409 and changes nothing.
/// </summary>
public record ConfirmTarget
{
    /// <summary>
    /// The exact target value this operation names in its description. A boolean true is rejected by the strict schema, so a bare confirmation can never stand in for a typed one.
    /// </summary>
    [JsonPropertyName("confirm")]
    public required string Confirm { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
