using System.Collections.Generic;
using System.Text.Json.Serialization;
using Tabby.Core.Models;

namespace Tabby.Models;

public record Disputes
{
    [JsonPropertyName("disputes")]
    public required IReadOnlyList<DisputeNoHistory> DisputesValue { get; init; }

    [JsonPropertyName("next_page_token")]
    public required string NextPageToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
