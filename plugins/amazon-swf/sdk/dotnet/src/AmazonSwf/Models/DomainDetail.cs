using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;

namespace AmazonSwf.Models;

public record DomainDetail
{
    [JsonPropertyName("domainInfo")]
    public required DomainInfo DomainInfo { get; init; }

    [JsonPropertyName("configuration")]
    public required DomainConfiguration Configuration { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
