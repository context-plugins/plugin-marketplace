using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Search1Api.Models;

public record AskRequest
{
    /// <summary>
    /// What you are looking for, in natural language. Platform hints ("on Reddit", "papers") and time hints ("this week") steer engine and time-range selection.
    /// </summary>
    [JsonPropertyName("query")]
    [StringLength(500, MinimumLength = 1)]
    public required string Query { get; init; }
}
