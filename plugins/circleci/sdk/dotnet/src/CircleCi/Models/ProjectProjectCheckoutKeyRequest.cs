using System.Text.Json.Serialization;
using CircleCi.Core.Models;
using CircleCi.Models.Enums;

namespace CircleCi.Models;

public record ProjectProjectCheckoutKeyRequest
{
    /// <summary>
    /// The type of checkout key to create
    /// </summary>
    [JsonPropertyName("type")]
    public required Type1CircleCiRestApiV1SshKeyApi Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
