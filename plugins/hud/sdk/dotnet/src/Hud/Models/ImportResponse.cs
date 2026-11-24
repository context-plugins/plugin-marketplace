using System;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.AnyOf;
using Hud.Models.Enums;

namespace Hud.Models;

public record ImportResponse
{
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    [JsonPropertyName("format")]
    public string Format { get; } = "harbor";

    [JsonPropertyName("taskset_id")]
    public required Guid TasksetId { get; init; }

    /// <summary>
    /// The bundle, as it was when the import started
    /// </summary>
    [JsonPropertyName("file")]
    public required ImportFile1 File { get; init; }

    /// <summary>
    /// <c>stopped</c>: the importer refused the bundle or stopped partway, and its report says why; <c>failed</c>: the import did not run to an outcome
    /// </summary>
    [JsonPropertyName("status")]
    public required Status1 Status { get; init; }

    /// <summary>
    /// The importer's account of the outcome; set once completed or stopped
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("summary")]
    public Summary? Summary { get; init; }

    /// <summary>
    /// Named counts the importer reports, e.g. <c>tasks_imported</c>; set with <c>summary</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metrics")]
    public Metrics? Metrics { get; init; }

    /// <summary>
    /// Why a failed import failed
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public Error? Error { get; init; }

    [JsonPropertyName("created_at")]
    public required DateTimeOffset CreatedAt { get; init; }

    /// <summary>
    /// Null while the import is live
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("completed_at")]
    public CompletedAt? CompletedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
