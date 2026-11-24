using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using BrowserUse.Core.Models;

namespace BrowserUse.Models;

/// <summary>
/// A value the caller supplies directly with the run.
/// </summary>
public record InlineSecretSource
{
    [JsonPropertyName("type")]
    public string Type { get; } = "inline";

    /// <summary>
    /// The secret itself. Limited to 4096 bytes once encoded for encryption; non-ASCII characters cost more than one byte each.
    /// </summary>
    [JsonPropertyName("value")]
    [MinLength(1)]
    public required string Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
