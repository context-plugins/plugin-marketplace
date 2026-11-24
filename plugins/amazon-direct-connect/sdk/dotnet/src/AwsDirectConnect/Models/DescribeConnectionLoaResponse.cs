using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect.Models;

public record DescribeConnectionLoaResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("loa")]
    public Loa? Loa { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
