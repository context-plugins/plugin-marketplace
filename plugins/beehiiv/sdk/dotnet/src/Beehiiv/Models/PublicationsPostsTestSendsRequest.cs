using System.Collections.Generic;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record PublicationsPostsTestSendsRequest
{
    /// <summary>
    /// One or more email addresses to send the test to. Returns 422 if the daily test send limit has been reached.
    /// </summary>
    [JsonPropertyName("recipient_emails")]
    public required IReadOnlyList<string> RecipientEmails { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
