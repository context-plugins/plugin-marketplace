using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record ApiV2IdentitiesResponse2
{
    /// <summary>
    /// Success message
    /// </summary>
    [JsonPropertyName("message")]
    public required string Message { get; init; }

    /// <summary>
    /// Archived identity ID
    /// </summary>
    [JsonPropertyName("identity_id")]
    public required int IdentityId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
