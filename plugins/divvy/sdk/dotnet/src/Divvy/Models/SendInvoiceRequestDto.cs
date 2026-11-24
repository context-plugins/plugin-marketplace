using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// Send an invoice to a customer
/// </summary>
public record SendInvoiceRequestDto
{
    [JsonPropertyName("replyTo")]
    public required ReplyTo ReplyTo { get; init; }

    [JsonPropertyName("recipient")]
    public required Recipient Recipient { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
