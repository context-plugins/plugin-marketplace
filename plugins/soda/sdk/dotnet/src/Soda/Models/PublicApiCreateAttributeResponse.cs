using System.Text.Json.Serialization;
using Soda.Core.Models;

namespace Soda.Models;

public record PublicApiCreateAttributeResponse
{
    [JsonPropertyName("attribute")]
    public required AttributeContentDto Attribute { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
