using System.Text.Json.Serialization;
using Curlec.Core.Models;

namespace Curlec.Models;

public record VirtualAccountsCloseRequest
{
    /// <summary>
    /// Must be 'closed' to close the account.
    /// </summary>
    [JsonPropertyName("status")]
    public string Status { get; } = "closed";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
