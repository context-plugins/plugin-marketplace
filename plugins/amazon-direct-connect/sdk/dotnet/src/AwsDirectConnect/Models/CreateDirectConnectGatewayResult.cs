using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect.Models;

public record CreateDirectConnectGatewayResult
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("directConnectGateway")]
    public DirectConnectGateway? DirectConnectGateway { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
