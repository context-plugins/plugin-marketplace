using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Core.Validation.Attributes;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

public record CreateExternalLink
{
    /// <summary>
    /// Set how long (in minutes) the external link is valid for. The link can be valid for up to 10080 minutes (7 days).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("duration")]
    [Maximum(10080)]
    public int? Duration { get; init; }

    /// <summary>
    /// Include up to 50 <c>key: value</c> pairs to annotate requests with custom metadata.
    /// - Maximum character length for individual <c>keys</c> is 40.
    /// - Maximum character length for individual <c>values</c> is 500.
    /// (For example, <c>order_number: 25</c>, <c>item_type: produce</c>, <c>department: sales</c>)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public object? Tags { get; init; }

    /// <summary>
    /// Set the type of external link to create.
    /// <list type="bullet">
    ///   <item><description><c>UPLOAD</c> - Create a link that can be used to upload files to Finix.</description></item>
    ///   <item><description><c>DOWNLOAD</c> - Create a link where the uploaded file can be downloaded from.</description></item>
    ///   <item><description><c>VIEW</c> - Create a link that displays the file in browser.</description></item>
    /// </list>
    /// </summary>
    [JsonPropertyName("type")]
    public required Type46 Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
