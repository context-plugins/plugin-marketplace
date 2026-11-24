using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// Invoice replyTo object.
/// </summary>
public record InvoiceReplyTo
{
    /// <summary>
    /// BILL-generated ID of the user sending the invoice. The value begins with <c>006</c>.
    /// <para>
    /// You can retrieve your user ID when you sign in with <c>/v3/login</c>.
    /// </para>
    /// </summary>
    [JsonPropertyName("userId")]
    public required string UserId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
