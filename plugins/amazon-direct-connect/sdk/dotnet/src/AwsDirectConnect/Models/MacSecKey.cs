using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect.Models;

public record MacSecKey
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the MAC Security (MACsec) secret key.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("secretARN")]
    public string? SecretArn { get; init; }

    /// <summary>
    /// The Connection Key Name (CKN) for the MAC Security secret key.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ckn")]
    public string? Ckn { get; init; }

    /// <summary>
    /// The state of the MAC Security (MACsec) secret key. The possible values are: associating: The MAC Security (MACsec) secret key is being validated and not yet associated with the connection or LAG. associated: The MAC Security (MACsec) secret key is validated and associated with the connection or LAG. disassociating: The MAC Security (MACsec) secret key is being disassociated from the connection or LAG disassociated: The MAC Security (MACsec) secret key is no longer associated with the connection or LAG.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public string? State { get; init; }

    /// <summary>
    /// The date that the MAC Security (MACsec) secret key takes effect. The value is displayed in UTC format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startOn")]
    public string? StartOn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
