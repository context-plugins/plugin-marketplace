using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Divvy.Core.Models;
using Divvy.Models.Enums;

namespace Divvy.Models;

/// <summary>
/// Accept network invitation
/// </summary>
public record AcceptInvitationRequestDto
{
    /// <summary>
    /// Payment Network ID (PNI) of the customer or vendor that sent the invitation. BILL uses the PNI to send and receive electronic payments.
    /// </summary>
    [JsonPropertyName("networkId")]
    [MinLength(1)]
    public required string NetworkId { get; init; }

    [JsonPropertyName("type")]
    public required AcceptInviteType Type { get; init; }

    /// <summary>
    /// BILL-generated ID of the existing vendor or customer record in your organization that you want to connect with. The value begins with <c>009</c> (vendor) or <c>0cu</c> (customer).
    /// <para>
    /// When you set this field, you cannot set <c>name</c> in your request.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// Name of the new vendor or customer record that you want to add in your organization. BILL creates a new record with this name.
    /// <para>
    /// When you set this field, you cannot set <c>id</c> in your request.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
