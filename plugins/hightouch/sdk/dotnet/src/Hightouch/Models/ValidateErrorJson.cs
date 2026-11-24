using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Hightouch.Models;

public record ValidateErrorJson
{
    [JsonPropertyName("message")]
    public string Message { get; } = "Validation failed";

    [JsonPropertyName("details")]
    public required IReadOnlyDictionary<string, object> Details { get; init; }
}
