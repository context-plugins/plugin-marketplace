using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect.Models;

public record DisassociateMacSecKeyRequest
{
    /// <summary>
    /// The ID of the dedicated connection (dxcon-xxxx), interconnect (dxcon-xxxx), or LAG (dxlag-xxxx). You can use DescribeConnections, DescribeInterconnects, or DescribeLags to retrieve connection ID.
    /// </summary>
    [JsonPropertyName("connectionId")]
    public required string ConnectionId { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the MAC Security (MACsec) secret key. You can use DescribeConnections to retrieve the ARN of the MAC Security (MACsec) secret key.
    /// </summary>
    [JsonPropertyName("secretARN")]
    public required string SecretArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
