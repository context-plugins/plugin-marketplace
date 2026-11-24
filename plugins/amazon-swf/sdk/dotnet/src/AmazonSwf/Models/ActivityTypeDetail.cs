using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;

namespace AmazonSwf.Models;

public record ActivityTypeDetail
{
    [JsonPropertyName("typeInfo")]
    public required ActivityTypeInfo TypeInfo { get; init; }

    [JsonPropertyName("configuration")]
    public required ActivityTypeConfiguration Configuration { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
