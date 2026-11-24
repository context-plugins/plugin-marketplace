using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Request for AdjustAppGroupBalance.
/// </summary>
public record GoogleCloudApigeeV1AdjustAppGroupBalanceRequest
{
    /// <summary>
    /// Required. * A positive value of <c>adjustment</c> means that that the API provider wants to adjust the balance for an under-charged AppGroup i.e. the balance of the AppGroup will decrease. * A negative value of <c>adjustment</c> is not supported. Use credit balance API instead.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("adjustment")]
    public GoogleTypeMoney9? Adjustment { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
