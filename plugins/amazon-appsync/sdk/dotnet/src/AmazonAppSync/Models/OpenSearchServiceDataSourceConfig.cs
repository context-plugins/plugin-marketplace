using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;

namespace AmazonAppSync.Models;

public record OpenSearchServiceDataSourceConfig
{
    /// <summary>
    /// The endpoint.
    /// </summary>
    [JsonPropertyName("endpoint")]
    public required string Endpoint { get; init; }

    /// <summary>
    /// The Amazon Web Services Region.
    /// </summary>
    [JsonPropertyName("awsRegion")]
    public required string AwsRegion { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
