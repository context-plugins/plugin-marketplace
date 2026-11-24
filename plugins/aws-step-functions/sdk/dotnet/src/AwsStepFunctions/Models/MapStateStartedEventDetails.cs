using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;

namespace AwsStepFunctions.Models;

public record MapStateStartedEventDetails
{
    /// <summary>
    /// The size of the array for Map state iterations.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("length")]
    public int? Length { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
