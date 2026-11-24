using System.Text.Json.Serialization;
using GoogleCloudTalentSolution.Core.Models;
using GoogleCloudTalentSolution.Models.Enums;

namespace GoogleCloudTalentSolution.Models;

/// <summary>
/// Options for job processing.
/// </summary>
public record ProcessingOptions
{
    /// <summary>
    /// If set to <c>true</c>, the service does not attempt to resolve a more precise address for the job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("disableStreetAddressResolution")]
    public bool? DisableStreetAddressResolution { get; init; }

    /// <summary>
    /// Option for job HTML content sanitization. Applied fields are: * description * applicationInfo.instruction * incentives * qualifications * responsibilities HTML tags in these fields may be stripped if sanitiazation isn't disabled. Defaults to HtmlSanitization.SIMPLE_FORMATTING_ONLY.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("htmlSanitization")]
    public HtmlSanitization? HtmlSanitization { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
