using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect.Models;

public record AssociateMacSecKeyRequest
{
    /// <summary>
    /// The ID of the dedicated connection (dxcon-xxxx), interconnect (dxcon-xxxx), or LAG (dxlag-xxxx). You can use DescribeConnections, DescribeInterconnects, or DescribeLags to retrieve connection ID.
    /// </summary>
    [JsonPropertyName("connectionId")]
    public required string ConnectionId { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the MAC Security (MACsec) secret key to associate with the connection. You can use DescribeConnections or DescribeLags to retrieve the MAC Security (MACsec) secret key. If you use this request parameter, you do not use the ckn and cak request parameters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("secretARN")]
    public string? SecretArn { get; init; }

    /// <summary>
    /// The MAC Security (MACsec) CKN to associate with the connection. You can create the CKN/CAK pair using an industry standard tool. The valid values are 64 hexadecimal characters (0-9, A-E). If you use this request parameter, you must use the cak request parameter and not use the secretARN request parameter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ckn")]
    public string? Ckn { get; init; }

    /// <summary>
    /// The MAC Security (MACsec) CAK to associate with the connection. You can create the CKN/CAK pair using an industry standard tool. The valid values are 64 hexadecimal characters (0-9, A-E). If you use this request parameter, you must use the ckn request parameter and not use the secretARN request parameter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cak")]
    public string? Cak { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
