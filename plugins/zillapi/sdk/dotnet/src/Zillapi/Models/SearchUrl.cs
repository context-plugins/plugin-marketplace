using System.Text.Json.Serialization;
using Zillapi.Core.Models;
using Zillapi.Core.Validation;
using Zillapi.Core.Validation.Attributes;

namespace Zillapi.Models;

public record SearchUrl
{
    /// <summary>
    /// A zillow.com search URL that MUST contain a <c>searchQueryState=</c> query parameter. Pretty URLs (e.g. https://www.zillow.com/austin-tx/houses/) are rejected with 400 invalid_search_url.
    /// </summary>
    [JsonPropertyName("url")]
    [Format(FormatKind.Uri)]
    public required string Url { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
