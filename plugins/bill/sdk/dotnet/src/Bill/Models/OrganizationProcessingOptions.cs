using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// User provided options for having the same mailing address as the physical address.
/// </summary>
public record OrganizationProcessingOptions
{
    /// <summary>
    /// Set as <c>true</c> if the mailing address is the same as the physical address. The default value is <c>true</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mailingAddressSameAsPhysical")]
    public bool? MailingAddressSameAsPhysical { get; init; }

    /// <summary>
    /// Rule for how ACH transfers are made from the organization funding bank account to vendors.
    /// * Set as <c>true</c> for an individual ACH transfer for each payment made.
    /// * Set as <c>false</c> for a single batch ACH transfer for all payments made in a day. The default value is <c>false</c>.
    /// <para>
    /// <b>Note</b>: You can set this field only when you update an organization (<c>PATCH /v3/organizations/{organizationId}</c>).
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("individualTransferOut")]
    public bool? IndividualTransferOut { get; init; }

    /// <summary>
    /// Rule for how ACH transfers are made from customers to the organization funding bank account.
    /// * Set as <c>true</c> for an individual ACH transfer for each payment received.
    /// * Set as <c>false</c> for a single batch ACH transfer for all payments received in a day. The default value is <c>false</c>.
    /// <para>
    /// <b>Note</b>: You can set this field only when you update an organization (<c>PATCH /v3/organizations/{organizationId}</c>).
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("individualTransferIn")]
    public bool? IndividualTransferIn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
