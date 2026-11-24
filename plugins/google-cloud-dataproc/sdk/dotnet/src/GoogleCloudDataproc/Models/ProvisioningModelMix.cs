using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Defines how to create VMs with a mixture of provisioning models.
/// </summary>
public record ProvisioningModelMix
{
    /// <summary>
    /// Optional. The percentage of target capacity that should use Standard VM. The remaining percentage will use Spot VMs. The percentage applies only to the capacity above standard_capacity_base. eg. If 15 instances are requested and standard_capacity_base is 5 and standard_capacity_percent_above_base is 30, the service will create 5 standard VMs and then start mixing spot and standard VMs for remaining 10 instances. The mix will be 30% standard and 70% spot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("standardCapacityPercentAboveBase")]
    public int? StandardCapacityPercentAboveBase { get; init; }

    /// <summary>
    /// Optional. The base capacity that will always use Standard VMs to avoid risk of more preemption than the minimum capacity you need. The service will create only standard VMs until it reaches standard_capacity_base, then it will start using standard_capacity_percent_above_base to mix Spot with Standard VMs. eg. If 15 instances are requested and standard_capacity_base is 5, the service will create 5 standard VMs and thenstart mixing spot and standard VMs for remaining 10 instances.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("standardCapacityBase")]
    public int? StandardCapacityBase { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
