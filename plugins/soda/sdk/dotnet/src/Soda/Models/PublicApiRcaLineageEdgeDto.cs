using System.Text.Json.Serialization;
using Soda.Core.Models;

namespace Soda.Models;

public record PublicApiRcaLineageEdgeDto
{
    [JsonPropertyName("from")]
    public required string From { get; init; }

    [JsonPropertyName("to")]
    public required string To { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
