using System.Collections.Generic;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record ApiV1PostReconnectSocialAccountResponse
{
    [JsonPropertyName("total")]
    public required double Total { get; init; }

    [JsonPropertyName("succeeded")]
    public required double Succeeded { get; init; }

    [JsonPropertyName("failed")]
    public required double Failed { get; init; }

    [JsonPropertyName("results")]
    public required IReadOnlyList<ResultBundleSocialPostApi> Results { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
