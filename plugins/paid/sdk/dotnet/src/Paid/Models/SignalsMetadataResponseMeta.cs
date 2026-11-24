using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record SignalsMetadataResponseMeta
{
    [JsonPropertyName("fromDate")]
    public required string FromDate { get; init; }

    [JsonPropertyName("toDate")]
    public required string ToDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
