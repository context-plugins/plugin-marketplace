using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Bill.Core.Models;
using Bill.Models.Enums;

namespace Bill.Models;

/// <summary>
/// Create an organization in the BILL network
/// </summary>
public record CreateInvitationRequestDto
{
    /// <summary>
    /// Payment Network ID (PNI) of the organization you want to connect with. For a verified national vendor, the value begins with <c>0rv</c>. BILL uses the PNI to send and receive electronic payments.
    /// <para>
    /// You can retrieve <c>networkId</c> from your <c>GET /v3/network</c> search result.
    /// </para>
    /// </summary>
    [JsonPropertyName("networkId")]
    [MinLength(1)]
    public required string NetworkId { get; init; }

    [JsonPropertyName("networkType")]
    public required NetworkType NetworkType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rppsInformation")]
    public RppsInformation2? RppsInformation { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
