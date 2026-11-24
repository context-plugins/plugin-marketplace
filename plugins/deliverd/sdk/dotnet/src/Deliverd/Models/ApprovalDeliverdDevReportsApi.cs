using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ApprovalDeliverdDevReportsApi
{
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    [JsonPropertyName("status")]
    public string Status { get; } = "pending";

    [JsonPropertyName("rule")]
    public required string? Rule { get; init; }

    [JsonPropertyName("reason")]
    public required string? Reason { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
