using System.Text.Json.Serialization;
using Basiq.Core.Models;
using Basiq.Core.Validation;
using Basiq.Core.Validation.Attributes;

namespace Basiq.Models;

public record Links1InsightsApi
{
    /// <summary>
    /// Self-referencing link to this insight
    /// </summary>
    [JsonPropertyName("self")]
    [Format(FormatKind.Uri)]
    public required string Self { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
