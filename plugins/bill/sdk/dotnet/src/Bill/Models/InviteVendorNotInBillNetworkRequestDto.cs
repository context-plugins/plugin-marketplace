using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// Invite a vendor not in BILL network
/// </summary>
public record InviteVendorNotInBillNetworkRequestDto
{
    /// <summary>
    /// Vendor email address
    /// </summary>
    [JsonPropertyName("email")]
    [MinLength(1)]
    public required string Email { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
