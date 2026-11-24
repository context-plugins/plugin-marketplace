using System.Text.Json.Serialization;
using DynamicFeed.Core.Models;
using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Models;

public record BodySignupSignupPost
{
    /// <summary>
    /// optional, for receipts
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    public Email? Email { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
