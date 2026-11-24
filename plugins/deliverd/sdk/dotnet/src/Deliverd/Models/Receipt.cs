using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record Receipt
{
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    [JsonPropertyName("gateId")]
    public required Guid GateId { get; init; }

    [JsonPropertyName("phase")]
    public required Phase Phase { get; init; }

    [JsonPropertyName("claimId")]
    public required Guid? ClaimId { get; init; }

    [JsonPropertyName("executedAt")]
    public required string? ExecutedAt { get; init; }

    [JsonPropertyName("artifactSha256")]
    public required string? ArtifactSha256 { get; init; }

    [JsonPropertyName("destination")]
    public required Destination1? Destination { get; init; }

    [JsonPropertyName("result")]
    public required IReadOnlyDictionary<string, object> Result { get; init; }

    [JsonPropertyName("verification")]
    public required Verification Verification { get; init; }

    [JsonPropertyName("detail")]
    public required string? Detail { get; init; }

    [JsonPropertyName("reportedBy")]
    public required string ReportedBy { get; init; }

    [JsonPropertyName("createdAt")]
    public required string CreatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
