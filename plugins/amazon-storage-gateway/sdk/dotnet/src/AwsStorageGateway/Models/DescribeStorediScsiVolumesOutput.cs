using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record DescribeStorediScsiVolumesOutput
{
    /// <summary>
    /// Describes a single unit of output from DescribeStorediSCSIVolumes. The following fields are returned: ChapEnabled: Indicates whether mutual CHAP is enabled for the iSCSI target. LunNumber: The logical disk number. NetworkInterfaceId: The network interface ID of the stored volume that initiator use to map the stored volume as an iSCSI target. NetworkInterfacePort: The port used to communicate with iSCSI targets. PreservedExistingData: Indicates when the stored volume was created, existing data on the underlying local disk was preserved. SourceSnapshotId: If the stored volume was created from a
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StorediSCSIVolumes")]
    public IReadOnlyList<StorediScsiVolume>? StorediScsiVolumes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
