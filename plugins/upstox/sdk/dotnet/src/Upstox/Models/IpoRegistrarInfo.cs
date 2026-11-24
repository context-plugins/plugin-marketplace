using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record IpoRegistrarInfo
{
    /// <summary>
    /// Name of the registrar handling the issue
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Contact email for the registrar
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    public string? Email { get; init; }

    /// <summary>
    /// Contact person at the registrar
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("contact_name")]
    public string? ContactName { get; init; }

    /// <summary>
    /// Contact number for the registrar
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("contact_number")]
    public string? ContactNumber { get; init; }

    /// <summary>
    /// Registrar's website
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("website")]
    public string? Website { get; init; }

    /// <summary>
    /// SEBI registration number of the registrar
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("registrar")]
    public string? Registrar { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
