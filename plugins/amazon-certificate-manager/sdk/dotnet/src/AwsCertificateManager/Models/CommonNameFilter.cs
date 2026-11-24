using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;
using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Models;

public record CommonNameFilter
{
    /// <summary>
    /// The value to match against.
    /// </summary>
    [JsonPropertyName("Value")]
    public required string Value { get; init; }

    /// <summary>
    /// The comparison operator to use.
    /// </summary>
    [JsonPropertyName("ComparisonOperator")]
    public required ComparisonOperator ComparisonOperator { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
