using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record TeamMemberFailure
{
    [JsonPropertyName("membership_id")]
    public required int MembershipId { get; init; }

    /// <summary>
    /// The uniform <c>{error, source, detail}</c> envelope returned for every 4xx/5xx.
    /// </summary>
    [JsonPropertyName("error")]
    public required ErrorResponseModel Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
