using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

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
