using System.Collections.Generic;
using System.Text.Json.Serialization;
using Lili.Core.Models;

namespace Lili.Models;

/// <summary>
/// An object representing a server error
/// </summary>
public record JsonErrorResponse
{
    /// <summary>
    /// The http status of the error
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("httpStatus")]
    public int? HttpStatus { get; init; }

    /// <summary>
    /// Human readable description of the error
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reasonPhrase")]
    public string? ReasonPhrase { get; init; }

    /// <summary>
    /// A list of all the errors that the server reported
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("errors")]
    public IReadOnlyList<JsonSingleError>? Errors { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
