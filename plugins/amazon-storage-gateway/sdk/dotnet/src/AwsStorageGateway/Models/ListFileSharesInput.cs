using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record ListFileSharesInput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the gateway whose file shares you want to list. If this field is not present, all file shares under your account are listed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("GatewayARN")]
    public string? GatewayArn { get; init; }

    /// <summary>
    /// The maximum number of file shares to return in the response. The value must be an integer with a value greater than zero. Optional.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Limit")]
    public int? Limit { get; init; }

    /// <summary>
    /// Opaque pagination token returned from a previous ListFileShares operation. If present, Marker specifies where to continue the list from after a previous call to ListFileShares. Optional.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Marker")]
    public string? Marker { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
