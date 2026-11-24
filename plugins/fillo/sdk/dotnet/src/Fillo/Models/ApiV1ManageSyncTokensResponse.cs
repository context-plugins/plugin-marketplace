using System.Collections.Generic;
using System.Text.Json.Serialization;
using Fillo.Core.Models;

namespace Fillo.Models;

public record ApiV1ManageSyncTokensResponse
{
    [JsonPropertyName("tokens")]
    public required IReadOnlyList<CredentialSummary> Tokens { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
