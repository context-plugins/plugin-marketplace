using System.Collections.Generic;
using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record ApiV2NumbersPurchaseRequest
{
    /// <summary>
    /// Array of DID IDs to purchase, from numbers_countries_cities_dids_index, numbers_search_show
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id_in")]
    public IReadOnlyList<int>? IdIn { get; init; }

    /// <summary>
    /// Array of DID numbers to purchase, from numbers_countries_cities_dids_index, numbers_search_show
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("did_numbers")]
    public IReadOnlyList<string>? DidNumbers { get; init; }

    /// <summary>
    /// Array of identity objects with document associations
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("identities")]
    public IReadOnlyList<object>? Identities { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
