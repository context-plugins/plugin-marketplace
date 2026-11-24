using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

/// <summary>
/// A step of a check that did not finish.
/// <para>
/// ``reason`` is shown to everyone who can read the result, so producers write it
/// from code: no model output, raw analysis context, or credentials.
/// </para>
/// </summary>
public record QaExecutionError
{
    [JsonPropertyName("stage")]
    [StringLength(64, MinimumLength = 1)]
    [RegularExpression("^[a-z][a-z0-9_]*$")]
    public required string Stage { get; init; }

    [JsonPropertyName("reason")]
    [StringLength(1000, MinimumLength = 1)]
    public required string Reason { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
