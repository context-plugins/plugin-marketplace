using System.Text.Json.Serialization;
using AmazonVpc.Core.Models;

namespace AmazonVpc.Models;

/// <summary>
/// Response from the CreateSubnet action
/// </summary>
public record CreateSubnetResponse
{
    /// <summary>
    /// Describes a subnet
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subnet")]
    public Subnet? Subnet { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
