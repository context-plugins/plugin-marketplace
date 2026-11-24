using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record RetrieveTapeRecoveryPointOutput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the virtual tape for which the recovery point was retrieved.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TapeARN")]
    public string? TapeArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
