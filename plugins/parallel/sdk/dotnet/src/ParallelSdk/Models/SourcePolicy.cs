using System.Collections.Generic;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Models;

/// <summary>
/// Source policy for web search results.
/// <para>
/// This policy governs which sources are allowed/disallowed in results.
/// </para>
/// </summary>
public record SourcePolicy
{
    /// <summary>
    /// List of domains to restrict the results to. If specified, only sources from these domains will be included. Accepts plain domains (e.g., example.com, subdomain.example.gov) or bare domain extension starting with a period (e.g., .gov, .edu, .co.uk). The combined number of domains in include_domains and exclude_domains cannot exceed 200.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("include_domains")]
    public IReadOnlyList<string>? IncludeDomains { get; init; }

    /// <summary>
    /// List of domains to exclude from results. If specified, sources from these domains will be excluded. Accepts plain domains (e.g., example.com, subdomain.example.gov) or bare domain extension starting with a period (e.g., .gov, .edu, .co.uk). The combined number of domains in include_domains and exclude_domains cannot exceed 200.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exclude_domains")]
    public IReadOnlyList<string>? ExcludeDomains { get; init; }

    /// <summary>
    /// Optional start date for filtering search results. Results will be limited to content published on or after this date. Provided as an RFC 3339 date string (YYYY-MM-DD).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("after_date")]
    public AfterDate? AfterDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
