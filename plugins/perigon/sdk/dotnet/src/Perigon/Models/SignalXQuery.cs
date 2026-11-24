using System.Text.Json.Serialization;
using Perigon.Core.Models;
using Perigon.Models.Enums;

namespace Perigon.Models;

public record SignalXQuery
{
    [JsonPropertyName("version")]
    public string Version { get; } = "V1";

    [JsonPropertyName("query")]
    public required string Query { get; init; }

    [JsonPropertyName("searchType")]
    public required SearchType SearchType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
