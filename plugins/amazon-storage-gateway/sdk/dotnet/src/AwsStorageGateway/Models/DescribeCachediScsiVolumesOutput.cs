using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record DescribeCachediScsiVolumesOutput
{
    /// <summary>
    /// An array of objects where each object contains metadata about one cached volume.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CachediSCSIVolumes")]
    public IReadOnlyList<CachediScsiVolume>? CachediScsiVolumes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
