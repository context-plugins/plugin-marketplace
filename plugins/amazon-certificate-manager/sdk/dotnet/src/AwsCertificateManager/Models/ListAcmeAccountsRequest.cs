using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;

namespace AwsCertificateManager.Models;

public record ListAcmeAccountsRequest
{
    /// <summary>
    /// A token for pagination.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    /// <summary>
    /// The maximum number of results to return.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MaxResults")]
    public int? MaxResults { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the ACME endpoint.
    /// </summary>
    [JsonPropertyName("AcmeEndpointArn")]
    public required string AcmeEndpointArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
