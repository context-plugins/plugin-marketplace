using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record CreateTapePoolOutput
{
    /// <summary>
    /// The unique Amazon Resource Name (ARN) that represents the custom tape pool. Use the ListTapePools operation to return a list of tape pools for your account and Amazon Web Services Region.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PoolARN")]
    public string? PoolArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
