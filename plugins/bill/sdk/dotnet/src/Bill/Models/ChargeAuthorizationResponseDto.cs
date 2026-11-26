using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// The type Charge customer response dto.
/// </summary>
public record ChargeAuthorizationResponseDto
{
    /// <summary>
    /// Set as <c>true</c> if your organization is authorized to charge the customer for invoices
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("authorizedToCharge")]
    public bool? AuthorizedToCharge { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
