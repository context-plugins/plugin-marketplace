using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;
using AmazonDevOpsGuru.Models.Enums;

namespace AmazonDevOpsGuru.Models;

public record ServiceResourceCost
{
    /// <summary>
    /// The type of the Amazon Web Services resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Type")]
    public string? Type { get; init; }

    /// <summary>
    /// The state of the resource. The resource is ACTIVE if it produces metrics, events, or logs within an hour, otherwise it is INACTIVE. You pay for the number of active Amazon Web Services resource hours analyzed for each resource. Inactive resources are not charged.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("State")]
    public State? State { get; init; }

    /// <summary>
    /// The number of active resources analyzed for this service to create a monthly cost estimate.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Count")]
    public int? Count { get; init; }

    /// <summary>
    /// The price per hour to analyze the resources in the service. For more information, see Estimate your Amazon DevOps Guru costs and Amazon DevOps Guru pricing.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("UnitCost")]
    public double? UnitCost { get; init; }

    /// <summary>
    /// The total estimated monthly cost to analyze the active resources for this resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Cost")]
    public double? Cost { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
