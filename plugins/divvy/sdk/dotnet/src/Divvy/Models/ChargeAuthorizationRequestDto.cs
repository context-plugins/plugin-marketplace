using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// Authorize your organization to charge the customer.
/// </summary>
public record ChargeAuthorizationRequestDto
{
    /// <summary>
    /// Set as <c>true</c> if your organization is authorized to charge the customer for invoices
    /// </summary>
    [JsonPropertyName("authorizedToCharge")]
    public required bool AuthorizedToCharge { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
