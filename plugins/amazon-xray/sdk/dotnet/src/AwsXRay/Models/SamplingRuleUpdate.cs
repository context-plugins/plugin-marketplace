using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record SamplingRuleUpdate
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
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ResourceARN")]
    public string? ResourceArn { get; init; }

    /// <summary>
    /// The priority of the sampling rule.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Priority")]
    public int? Priority { get; init; }

    /// <summary>
    /// The percentage of matching requests to instrument, after the reservoir is exhausted.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FixedRate")]
    public double? FixedRate { get; init; }

    /// <summary>
    /// A fixed number of matching requests to instrument per second, prior to applying the fixed rate. The reservoir is not used directly by services, but applies to all services using the rule collectively.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ReservoirSize")]
    public int? ReservoirSize { get; init; }

    /// <summary>
    /// Matches the hostname from a request URL.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Host")]
    public string? Host { get; init; }

    /// <summary>
    /// Matches the name that the service uses to identify itself in segments.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ServiceName")]
    public string? ServiceName { get; init; }

    /// <summary>
    /// Matches the origin that the service uses to identify its type in segments.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ServiceType")]
    public string? ServiceType { get; init; }

    /// <summary>
    /// Matches the HTTP method of a request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("HTTPMethod")]
    public string? HttpMethod { get; init; }

    /// <summary>
    /// Matches the path from a request URL.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("URLPath")]
    public string? UrlPath { get; init; }

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
