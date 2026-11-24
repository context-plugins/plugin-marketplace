using System.Text.Json.Serialization;
using Lusha.Core.Models;
using Lusha.Core.Validation.Attributes;

namespace Lusha.Models;

public record PaginationLushaApiDocumentationWebsiteVisitsApi
{
    [JsonPropertyName("size")]
    [Minimum(1)]
    [Maximum(150)]
    public required int Size { get; init; }

    [JsonPropertyName("page")]
    [Minimum(0)]
    public required int Page { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
