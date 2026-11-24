using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudTalentSolution.Core.Models;

namespace GoogleCloudTalentSolution.Models;

/// <summary>
/// Application related details of a job posting.
/// </summary>
public record ApplicationInfo
{
    /// <summary>
    /// Use this URI field to direct an applicant to a website, for example to link to an online application form. The maximum number of allowed characters for each entry is 2,000.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uris")]
    public IReadOnlyList<string>? Uris { get; init; }

    /// <summary>
    /// Use this field to provide instructions, such as "Mail your application to ...", that a candidate can follow to apply for the job. This field accepts and sanitizes HTML input, and also accepts bold, italic, ordered list, and unordered list markup tags. The maximum number of allowed characters is 3,000.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("instruction")]
    public string? Instruction { get; init; }

    /// <summary>
    /// Use this field to specify email address(es) to which resumes or applications can be sent. The maximum number of allowed characters for each entry is 255.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("emails")]
    public IReadOnlyList<string>? Emails { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
