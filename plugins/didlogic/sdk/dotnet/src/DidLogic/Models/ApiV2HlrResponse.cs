using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record ApiV2HlrResponse
{
    /// <summary>
    /// Created HLR lookup task details
    /// </summary>
    [JsonPropertyName("hlr_request")]
    public required HlrRequest HlrRequest { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
