using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Request for AdjustDeveloperBalance.
/// </summary>
public record GoogleCloudApigeeV1AdjustDeveloperBalanceRequest
{
    /// <summary>
    /// <list type="bullet">
    ///   <item><description>A positive value of <c>adjustment</c> means that that the API provider wants to adjust the balance for an under-charged developer i.e. the balance of the developer will decrease. * A negative value of <c>adjustment</c> means that that the API provider wants to adjust the balance for an over-charged developer i.e. the balance of the developer will increase. NOTE: An adjustment cannot increase the balance of the developer beyond the balance as of the most recent credit. For example, if a developer's balance is updated to be $100, and they spend $10, a negative adjustment can only increase the balance of the developer to $100.</description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("adjustment")]
    public GoogleTypeMoney10? Adjustment { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
