using System;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Core.Validation;
using Paid.Core.Validation.Attributes;

namespace Paid.Models;

public record ValueReceiptDetail
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

    [JsonPropertyName("isPublished")]
    public required bool IsPublished { get; init; }

    [JsonPropertyName("customerId")]
    public required string? CustomerId { get; init; }

    [JsonPropertyName("customerName")]
    public required string? CustomerName { get; init; }

    [JsonPropertyName("customerExternalId")]
    public required string? CustomerExternalId { get; init; }

    [JsonPropertyName("orderId")]
    public required string? OrderId { get; init; }

    [JsonPropertyName("productId")]
    public required string? ProductId { get; init; }

    [JsonPropertyName("currency")]
    public required string Currency { get; init; }

    [JsonPropertyName("startDate")]
    public required DateTimeOffset? StartDate { get; init; }

    [JsonPropertyName("endDate")]
    public required DateTimeOffset? EndDate { get; init; }

    [JsonPropertyName("totalDeliveredValue")]
    public required double? TotalDeliveredValue { get; init; }

    [JsonPropertyName("archivedAt")]
    public required DateTimeOffset? ArchivedAt { get; init; }

    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    [JsonPropertyName("publishedAt")]
    public required DateTimeOffset? PublishedAt { get; init; }

    [JsonPropertyName("publishExpiresAt")]
    public required DateTimeOffset? PublishExpiresAt { get; init; }

    [JsonPropertyName("allowEmbed")]
    public required bool AllowEmbed { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
