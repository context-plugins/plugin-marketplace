using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleSearchConsole.Core.Models;
using GoogleSearchConsole.Models.Enums;

namespace GoogleSearchConsole.Models;

/// <summary>
/// Mobile-friendly test response, including mobile-friendly issues and resource issues.
/// </summary>
public record RunMobileFriendlyTestResponse
{
    /// <summary>
    /// List of mobile-usability issues.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mobileFriendlyIssues")]
    public IReadOnlyList<MobileFriendlyIssue>? MobileFriendlyIssues { get; init; }

    /// <summary>
    /// Information about embedded resources issues.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resourceIssues")]
    public IReadOnlyList<ResourceIssue>? ResourceIssues { get; init; }

    /// <summary>
    /// Test verdict, whether the page is mobile friendly or not.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mobileFriendliness")]
    public MobileFriendliness? MobileFriendliness { get; init; }

    /// <summary>
    /// Final state of the test, can be either complete or an error.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("testStatus")]
    public TestStatus1? TestStatus { get; init; }

    /// <summary>
    /// Screenshot of the requested URL.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("screenshot")]
    public Image1? Screenshot { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
