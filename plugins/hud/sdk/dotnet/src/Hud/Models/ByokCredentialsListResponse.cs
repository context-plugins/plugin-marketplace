using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record ByokCredentialsListResponse
{
    [JsonPropertyName("credentials")]
    public required IReadOnlyList<ByokCredentialItem> Credentials { get; init; }

    [JsonPropertyName("providers")]
    public required IReadOnlyList<ByokProviderOption> Providers { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
