using System.Collections.Generic;
using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record ApiV2NumbersCountriesResponse
{
    /// <summary>
    /// List of countries with available DID numbers
    /// </summary>
    [JsonPropertyName("countries")]
    public required IReadOnlyList<CountryDidlogicComNumbersInventoryApi> Countries { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
