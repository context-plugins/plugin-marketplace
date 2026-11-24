using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record DeleteFileShareInput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the file share to be deleted.
    /// </summary>
    [JsonPropertyName("FileShareARN")]
    public required string FileShareArn { get; init; }

    /// <summary>
    /// If this value is set to true, the operation deletes a file share immediately and aborts all data uploads to Amazon Web Services. Otherwise, the file share is not deleted until all data is uploaded to Amazon Web Services. This process aborts the data upload process, and the file share enters the FORCE_DELETING status. Valid Values: true | false
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ForceDelete")]
    public bool? ForceDelete { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
