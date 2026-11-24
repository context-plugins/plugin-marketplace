using System.Text.Json.Serialization;
using AmazonVpc.Core.Models;

namespace AmazonVpc.Models;

/// <summary>
/// Response from the CreateInternetGateway action
/// </summary>
public record CreateInternetGatewayResponse
{
    /// <summary>
    /// Describes an internet gateway
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("internetGateway")]
    public InternetGateway? InternetGateway { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
