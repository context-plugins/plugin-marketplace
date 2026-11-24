using System.Text.Json.Serialization;
using Basiq.Core.Models;
using Basiq.Core.Validation;
using Basiq.Core.Validation.Attributes;

namespace Basiq.Models;

public record Links3
{
    /// <summary>
    /// Link to this specific insight
    /// </summary>
    [JsonPropertyName("self")]
    [Format(FormatKind.Uri)]
    public required string Self { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
