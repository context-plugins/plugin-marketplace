using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hightouch.Core.Models;

namespace Hightouch.Models;

public record ValidateErrorJsonError
{
    [JsonPropertyName("message")]
    public string Message { get; } = "Validation failed";

    [JsonPropertyName("details")]
    public required IReadOnlyDictionary<string, object> Details { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
