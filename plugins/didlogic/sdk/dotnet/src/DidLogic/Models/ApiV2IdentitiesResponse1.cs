using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record ApiV2IdentitiesResponse1
{
    /// <summary>
    /// Success message
    /// </summary>
    [JsonPropertyName("message")]
    public required string Message { get; init; }

    /// <summary>
    /// Created identity ID
    /// </summary>
    [JsonPropertyName("identity_id")]
    public required int IdentityId { get; init; }

    /// <summary>
    /// Created identity details
    /// </summary>
    [JsonPropertyName("identity")]
    public required Identity2 Identity { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
