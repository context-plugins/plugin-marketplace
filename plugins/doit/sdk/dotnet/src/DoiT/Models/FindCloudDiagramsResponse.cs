using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Core.Validation;
using DoiT.Core.Validation.Attributes;

namespace DoiT.Models;

public record FindCloudDiagramsResponse
{
    /// <summary>
    /// URL to the diagram viewer.
    /// </summary>
    [JsonPropertyName("diagramUrl")]
    [Format(FormatKind.Uri)]
    public required string DiagramUrl { get; init; }

    /// <summary>
    /// URL to the diagram image.
    /// </summary>
    [JsonPropertyName("imageUrl")]
    [Format(FormatKind.Uri)]
    public required string ImageUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
