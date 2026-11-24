using System.Collections.Generic;
using System.Text.Json.Serialization;
using Cosmic.Core.Models;

namespace Cosmic.Models;

public record BlocksResponse
{
    /// <summary>
    /// The Bucket's content Blocks. Empty when none are configured.
    /// </summary>
    [JsonPropertyName("blocks")]
    public required IReadOnlyList<object> Blocks { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
