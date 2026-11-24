using System.Collections.Generic;
using System.Text.Json.Serialization;
using Fillo.Core.Models;

namespace Fillo.Models;

public record ApiV1ManageRespondentsResponse
{
    [JsonPropertyName("data")]
    public required IReadOnlyList<Respondent> Data { get; init; }

    [JsonPropertyName("nextCursor")]
    public required string? NextCursor { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
