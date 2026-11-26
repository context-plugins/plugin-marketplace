using System.Text.Json.Serialization;
using Bill.Core.Models;
using Bill.Models.Enums;

namespace Bill.Models;

/// <summary>
/// ThreeDsRequestDto represents a request for 3D Secure actions.
/// </summary>
public record ThreeDsRequestDto
{
    [JsonPropertyName("action")]
    public required ThreeDsActionType Action { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
