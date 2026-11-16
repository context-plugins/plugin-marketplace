using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// For your convenience, every response includes several URLs which link to resources relevant to the request. You can use these <c>_links</c> to make your follow-up requests and quickly access relevant IDs.
/// </summary>
public record Links10
{
    /// <summary>
    /// Link to the resource that was used in the request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("self")]
    public Self? Self { get; init; }

    /// <summary>
    /// Link to the <c>Application</c> the request was made under.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("application")]
    public ApplicationLink? Application { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
