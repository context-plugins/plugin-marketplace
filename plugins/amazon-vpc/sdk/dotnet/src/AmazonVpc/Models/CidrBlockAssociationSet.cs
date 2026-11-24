using System.Text.Json.Serialization;
using AmazonVpc.Core.Models;

namespace AmazonVpc.Models;

public record CidrBlockAssociationSet
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cidrBlock")]
    public string? CidrBlock { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("associationId")]
    public string? AssociationId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cidrBlockState")]
    public CidrBlockState? CidrBlockState { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
