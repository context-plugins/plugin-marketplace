using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;
using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Models;

public record DeleteVirtualInterfaceResponse
{
    /// <summary>
    /// The state of the virtual interface. The following are the possible values: confirming: The creation of the virtual interface is pending confirmation from the virtual interface owner. If the owner of the virtual interface is different from the owner of the connection on which it is provisioned, then the virtual interface will remain in this state until it is confirmed by the virtual interface owner. verifying: This state only applies to public virtual interfaces. Each public virtual interface needs validation before the virtual interface can be created. pending: A virtual interface is in this s
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("virtualInterfaceState")]
    public VirtualInterfaceState? VirtualInterfaceState { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
