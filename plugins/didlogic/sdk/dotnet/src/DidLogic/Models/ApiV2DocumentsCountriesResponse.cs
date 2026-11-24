using System.Collections.Generic;
using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record ApiV2DocumentsCountriesResponse
{
    /// <summary>
    /// Countries a document can be uploaded for
    /// </summary>
    [JsonPropertyName("countries")]
    public required IReadOnlyList<Country> Countries { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
