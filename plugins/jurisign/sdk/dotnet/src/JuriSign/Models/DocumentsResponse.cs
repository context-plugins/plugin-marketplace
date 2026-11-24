using System.Collections.Generic;
using System.Text.Json.Serialization;
using JuriSign.Core.Models;

namespace JuriSign.Models;

public record DocumentsResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public IReadOnlyList<Document>? Data { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("meta")]
    public PaginationModel? Meta { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
