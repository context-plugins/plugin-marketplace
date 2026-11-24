using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect.Models;

public record RouterType
{
    /// <summary>
    /// The vendor for the virtual interface's router.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vendor")]
    public string? Vendor { get; init; }

    /// <summary>
    /// The virtual interface router platform.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("platform")]
    public string? Platform { get; init; }

    /// <summary>
    /// The router software.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("software")]
    public string? Software { get; init; }

    /// <summary>
    /// The template for the virtual interface's router.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("xsltTemplateName")]
    public string? XsltTemplateName { get; init; }

    /// <summary>
    /// The MAC Security (MACsec) template for the virtual interface's router.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("xsltTemplateNameForMacSec")]
    public string? XsltTemplateNameForMacSec { get; init; }

    /// <summary>
    /// Identifies the router by a combination of vendor, platform, and software version. For example, CiscoSystemsInc-2900SeriesRouters-IOS124.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("routerTypeIdentifier")]
    public string? RouterTypeIdentifier { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
