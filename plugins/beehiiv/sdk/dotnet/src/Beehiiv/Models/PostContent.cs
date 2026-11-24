using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

/// <summary>
/// Optional html content for a post. Retrievable by including any of <c>expand: [free_web_content, free_email_content, free_rss_content, premium_web_content, premium_email_content]</c> in the post request body.
/// <para>
/// <b>Note:</b> Generating HTML is slow. We recommend only requesting the HTML versions you need at the time.
/// </para>
/// </summary>
public record PostContent
{
    /// <summary>
    /// The requested free post HTML. This HTML has paywalls enforced.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("free")]
    public FreePostContent? Free { get; init; }

    /// <summary>
    /// The requested premium post HTML. This HTML does not have paywalls enforced.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("premium")]
    public PremiumPostContent? Premium { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
