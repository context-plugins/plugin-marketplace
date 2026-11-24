using System.Collections.Generic;
using System.Text.Json.Serialization;
using Cosmic.Core.Models;
using Cosmic.Core.Validation;
using Cosmic.Core.Validation.Attributes;

namespace Cosmic.Models;

/// <summary>
/// The error shape returned by every non-2xx response.
/// </summary>
public record ErrorError
{
    /// <summary>
    /// The HTTP status code, repeated in the body.
    /// </summary>
    [JsonPropertyName("status")]
    public required int Status { get; init; }

    /// <summary>
    /// A human-readable explanation that tries to name the specific problem.
    /// </summary>
    [JsonPropertyName("message")]
    public required string Message { get; init; }

    /// <summary>
    /// Where to look for the correct usage. Present on the <c>Route not found</c> response returned for unrecognized paths.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("documentation")]
    [Format(FormatKind.Uri)]
    public string? Documentation { get; init; }

    /// <summary>
    /// Recovery suggestions, such as the host that actually serves the requested path. Present on the <c>Route not found</c> response returned for unrecognized paths.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hints")]
    public IReadOnlyList<string>? Hints { get; init; }

    /// <summary>
    /// Per-field validation failures, when the error came from schema validation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("details")]
    public IReadOnlyList<object>? Details { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
