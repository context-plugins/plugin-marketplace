using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;
using AmazonAppSync.Models.Enums;

namespace AmazonAppSync.Models;

public record V1ApisTypesRequest
{
    /// <summary>
    /// The type definition, in GraphQL Schema Definition Language (SDL) format. For more information, see the GraphQL SDL documentation.
    /// </summary>
    [JsonPropertyName("definition")]
    public required string Definition { get; init; }

    /// <summary>
    /// The type format: SDL or JSON.
    /// </summary>
    [JsonPropertyName("format")]
    public required FormatAwsAppSyncTypesApi Format { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
