using System.Collections.Generic;
using System.Text.Json.Serialization;
using AppstoreSpy.Core.Models;
using AppstoreSpy.Models.Enums;

namespace AppstoreSpy.Models;

public record IosAppSearchBody
{
    /// <summary>
    /// Count of apps in results
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("limit")]
    public int? Limit { get; init; } = 10;

    /// <summary>
    /// Offset page
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("page")]
    public int? Page { get; init; } = 1;

    /// <summary>
    /// Field for sort
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sort")]
    public IosSortEnum? Sort { get; init; }

    /// <summary>
    /// Fields for select, empty for all
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fields")]
    public IReadOnlyList<string>? Fields { get; init; }

    /// <summary>
    /// Country for which return data
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("country")]
    public AppCountries? Country { get; init; } = AppCountries.Us;

    /// <summary>
    /// Language of meta data. By default: en_US
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("language")]
    public AppLanguages? Language { get; init; }

    [JsonPropertyName("filter")]
    public required SearchFilterIos Filter { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
