using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record ConditionalBranch
{
    /// <summary>
    /// The name of the branch.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("condition")]
    public required Condition Condition { get; init; }

    [JsonPropertyName("nextStep")]
    public required DialogState NextStep { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("response")]
    public ResponseSpecification? Response { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
