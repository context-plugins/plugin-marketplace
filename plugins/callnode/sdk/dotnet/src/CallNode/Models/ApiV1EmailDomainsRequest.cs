using System.Text.Json.Serialization;
using CallNode.Core.Models;

namespace CallNode.Models;

public record ApiV1EmailDomainsRequest
{
    /// <summary>
    /// The hostname you will send from, e.g. <c>mail.acme.com</c>. Ours and public mailbox providers are refused.
    /// </summary>
    [JsonPropertyName("domain")]
    public required string Domain { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
