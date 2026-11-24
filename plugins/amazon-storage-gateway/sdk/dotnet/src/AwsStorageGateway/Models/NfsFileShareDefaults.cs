using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record NfsFileShareDefaults
{
    /// <summary>
    /// The Unix file mode in the form "nnnn". For example, 0666 represents the default file mode inside the file share. The default value is 0666.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FileMode")]
    public string? FileMode { get; init; }

    /// <summary>
    /// The Unix directory mode in the form "nnnn". For example, 0666 represents the default access mode for all directories inside the file share. The default value is 0777.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DirectoryMode")]
    public string? DirectoryMode { get; init; }

    /// <summary>
    /// The default group ID for the file share (unless the files have another group ID specified). The default value is nfsnobody.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("GroupId")]
    public int? GroupId { get; init; }

    /// <summary>
    /// The default owner ID for files in the file share (unless the files have another owner ID specified). The default value is nfsnobody.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("OwnerId")]
    public int? OwnerId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
