using System.Collections.Generic;
using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record ApiV2NumbersResponse
{
    /// <summary>
    /// List of DID numbers owned by the user
    /// </summary>
    [JsonPropertyName("dids")]
    public required IReadOnlyList<Dids4> Dids { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
