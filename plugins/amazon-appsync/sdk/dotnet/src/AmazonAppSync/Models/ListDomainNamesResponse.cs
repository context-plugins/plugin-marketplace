using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;

namespace AmazonAppSync.Models;

public record ListDomainNamesResponse
{
    /// <summary>
    /// Lists configurations for multiple domain names.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("domainNameConfigs")]
    public IReadOnlyList<DomainNameConfig>? DomainNameConfigs { get; init; }

    /// <summary>
    /// An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
