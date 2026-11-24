using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.Enums;

namespace Hud.Models;

public record HttpValidationError
{
    [JsonPropertyName("error")]
    public string Error { get; } = "validation_error";

    [JsonPropertyName("source")]
    public required Source Source { get; init; }

    [JsonPropertyName("detail")]
    public required string Detail { get; init; }

    [JsonPropertyName("errors")]
    public required IReadOnlyList<ValidationError> Errors { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
