using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Justtrack.Core.Models;

namespace Justtrack.Models;

public record ErrorResponseError
{
    /// <summary>
    /// description of the error
    /// </summary>
    [JsonPropertyName("error")]
    [MinLength(1)]
    public required string Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
