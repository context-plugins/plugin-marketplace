using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record SamplingRule
{
    /// <summary>
    /// The name of the sampling rule. Specify a rule by either name or ARN, but not both.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RuleName")]
    public string? RuleName { get; init; }

    /// <summary>
    /// The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RuleARN")]
    public string? RuleArn { get; init; }

    /// <summary>
    /// Matches the ARN of the Amazon Web Services resource on which the service runs.
    /// </summary>
    [JsonPropertyName("ResourceARN")]
    public required string ResourceArn { get; init; }

    /// <summary>
    /// The priority of the sampling rule.
    /// </summary>
    [JsonPropertyName("Priority")]
    public required int Priority { get; init; }

    /// <summary>
    /// The percentage of matching requests to instrument, after the reservoir is exhausted.
    /// </summary>
    [JsonPropertyName("FixedRate")]
    public required double FixedRate { get; init; }

    /// <summary>
    /// A fixed number of matching requests to instrument per second, prior to applying the fixed rate. The reservoir is not used directly by services, but applies to all services using the rule collectively.
    /// </summary>
    [JsonPropertyName("ReservoirSize")]
    public required int ReservoirSize { get; init; }

    /// <summary>
    /// Matches the name that the service uses to identify itself in segments.
    /// </summary>
    [JsonPropertyName("ServiceName")]
    public required string ServiceName { get; init; }

    /// <summary>
    /// Matches the origin that the service uses to identify its type in segments.
    /// </summary>
    [JsonPropertyName("ServiceType")]
    public required string ServiceType { get; init; }

    /// <summary>
    /// Matches the hostname from a request URL.
    /// </summary>
    [JsonPropertyName("Host")]
    public required string Host { get; init; }

    /// <summary>
    /// Matches the HTTP method of a request.
    /// </summary>
    [JsonPropertyName("HTTPMethod")]
    public required string HttpMethod { get; init; }

    /// <summary>
    /// Matches the path from a request URL.
    /// </summary>
    [JsonPropertyName("URLPath")]
    public required string UrlPath { get; init; }

    /// <summary>
    /// The version of the sampling rule format (1).
    /// </summary>
    [JsonPropertyName("Version")]
    public required int Version { get; init; }

    /// <summary>
    /// Matches attributes derived from the request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Attributes")]
    public IReadOnlyDictionary<string, string>? Attributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SamplingRateBoost")]
    public SamplingRateBoost? SamplingRateBoost { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
