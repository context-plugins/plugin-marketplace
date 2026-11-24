using System;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

public record OrderLine1
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("productId")]
    public required string ProductId { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("description")]
    public required string? Description { get; init; }

    [JsonPropertyName("startDate")]
    public required DateTimeOffset StartDate { get; init; }

    [JsonPropertyName("endDate")]
    public required DateTimeOffset? EndDate { get; init; }

    [JsonPropertyName("lineType")]
    public required OrderLineType LineType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
