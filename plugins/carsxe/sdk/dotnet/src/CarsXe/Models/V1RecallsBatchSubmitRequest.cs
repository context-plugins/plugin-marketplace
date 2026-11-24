using System.Collections.Generic;
using System.Text.Json.Serialization;
using CarsXe.Core.Models;

namespace CarsXe.Models;

public record V1RecallsBatchSubmitRequest
{
    /// <summary>
    /// Array of 17-character VINs (max 10,000 per batch).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vins")]
    public IReadOnlyList<string>? Vins { get; init; }

    /// <summary>
    /// Inline CSV text containing VINs. Available with CarsXE API-key authentication only; x402 does not accept this form.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("csv")]
    public string? Csv { get; init; }

    /// <summary>
    /// HTTPS link to a CSV file of VINs (max 5 MB) hosted on a supported storage provider (e.g. S3, GCS, Firebase, Dropbox). Available with CarsXE API-key authentication only; x402 does not accept this form.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("csvUrl")]
    public string? CsvUrl { get; init; }

    /// <summary>
    /// HTTPS URL for a customer webhook. CarsXE POSTs a JSON payload when the batch finishes. Must be a valid HTTPS URL allowed by CarsXE validation rules.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("webhookUrl")]
    public string? WebhookUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
