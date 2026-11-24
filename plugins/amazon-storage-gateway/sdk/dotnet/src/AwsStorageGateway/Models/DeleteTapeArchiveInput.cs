using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record DeleteTapeArchiveInput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the virtual tape to delete from the virtual tape shelf (VTS).
    /// </summary>
    [JsonPropertyName("TapeARN")]
    public required string TapeArn { get; init; }

    /// <summary>
    /// Set to TRUE to delete an archived tape that belongs to a custom pool with tape retention lock. Only archived tapes with tape retention lock set to governance can be deleted. Archived tapes with tape retention lock set to compliance can't be deleted.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("BypassGovernanceRetention")]
    public bool? BypassGovernanceRetention { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
