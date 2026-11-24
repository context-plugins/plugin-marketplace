using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;

namespace AmazonAppSync.Models;

public record ListResolversByFunctionResponse
{
    /// <summary>
    /// The list of resolvers.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resolvers")]
    public IReadOnlyList<Resolver>? Resolvers { get; init; }

    /// <summary>
    /// An identifier that you can use to return the next set of items in the list.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
