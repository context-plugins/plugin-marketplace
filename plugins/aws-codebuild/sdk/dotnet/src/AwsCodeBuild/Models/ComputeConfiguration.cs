using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;
using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Models;

public record ComputeConfiguration
{
    /// <summary>
    /// The number of vCPUs of the instance type included in your fleet.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vCpu")]
    public int? VCpu { get; init; }

    /// <summary>
    /// The amount of memory of the instance type included in your fleet.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("memory")]
    public int? Memory { get; init; }

    /// <summary>
    /// The amount of disk space of the instance type included in your fleet.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("disk")]
    public int? Disk { get; init; }

    /// <summary>
    /// The machine type of the instance type included in your fleet.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("machineType")]
    public MachineType? MachineType { get; init; }

    /// <summary>
    /// The EC2 instance type to be launched in your fleet.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("instanceType")]
    public string? InstanceType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
