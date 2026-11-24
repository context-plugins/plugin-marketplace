using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Core.Validation;
using Paid.Core.Validation.Attributes;

namespace Paid.Models;

public record ValueReceiptSyncResponse
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("status")]
    public required string Status { get; init; }

    [JsonPropertyName("publicUrlToken")]
    public required string PublicUrlToken { get; init; }

    [JsonPropertyName("publicUrl")]
    [Format(FormatKind.Uri)]
    public required string PublicUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
