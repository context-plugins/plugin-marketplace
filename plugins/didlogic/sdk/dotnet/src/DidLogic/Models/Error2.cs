using System.Collections.Generic;
using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record Error2
{
    [JsonPropertyName("code")]
    public required string Code { get; init; }

    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonPropertyName("details")]
    public required IReadOnlyList<Detail> Details { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
