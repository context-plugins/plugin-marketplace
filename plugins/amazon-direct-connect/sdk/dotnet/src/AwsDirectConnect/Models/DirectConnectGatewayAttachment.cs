using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;
using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Models;

public record DirectConnectGatewayAttachment
{
    /// <summary>
    /// The ID of the Direct Connect gateway.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("directConnectGatewayId")]
    public string? DirectConnectGatewayId { get; init; }

    /// <summary>
    /// The ID of the virtual interface.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("virtualInterfaceId")]
    public string? VirtualInterfaceId { get; init; }

    /// <summary>
    /// The Amazon Web Services Region where the virtual interface is located.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("virtualInterfaceRegion")]
    public string? VirtualInterfaceRegion { get; init; }

    /// <summary>
    /// The ID of the Amazon Web Services account that owns the virtual interface.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("virtualInterfaceOwnerAccount")]
    public string? VirtualInterfaceOwnerAccount { get; init; }

    /// <summary>
    /// The state of the attachment. The following are the possible values: attaching: The initial state after a virtual interface is created using the Direct Connect gateway. attached: The Direct Connect gateway and virtual interface are attached and ready to pass traffic. detaching: The initial state after calling DeleteVirtualInterface. detached: The virtual interface is detached from the Direct Connect gateway. Traffic flow between the Direct Connect gateway and virtual interface is stopped.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attachmentState")]
    public AttachmentState? AttachmentState { get; init; }

    /// <summary>
    /// The type of attachment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attachmentType")]
    public AttachmentType? AttachmentType { get; init; }

    /// <summary>
    /// The error message if the state of an object failed to advance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stateChangeError")]
    public string? StateChangeError { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
