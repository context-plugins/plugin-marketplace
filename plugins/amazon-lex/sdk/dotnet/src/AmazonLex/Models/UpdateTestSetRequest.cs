using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record UpdateTestSetRequest
{
    /// <summary>
    /// The test set Id for which update test operation to be performed.
    /// </summary>
    [JsonPropertyName("testSetId")]
    public required string TestSetId { get; init; }

    /// <summary>
    /// The new test set name.
    /// </summary>
    [JsonPropertyName("testSetName")]
    public required string TestSetName { get; init; }

    /// <summary>
    /// The new test set description.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
