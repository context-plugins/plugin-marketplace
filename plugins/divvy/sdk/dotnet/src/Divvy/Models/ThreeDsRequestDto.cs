using System.Text.Json.Serialization;
using Divvy.Core.Models;
using Divvy.Models.Enums;

namespace Divvy.Models;

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
