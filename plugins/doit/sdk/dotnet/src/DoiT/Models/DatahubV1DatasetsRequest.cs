using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

public record DatahubV1DatasetsRequest
{
    /// <summary>
    /// The name of the dataset. Allowed characters: alphanumeric (0-9,a-z,A-Z), underscore (_), dash (-), and spaces between words.
    /// </summary>
    [JsonPropertyName("name")]
    [RegularExpression("^[a-zA-Z0-9_-]+( [a-zA-Z0-9_-]+)*$")]
    public required string Name { get; init; }

    /// <summary>
    /// An optional description for the dataset.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Optional human-readable name shown in the DoiT console and in report results instead of <c>name</c>. 1-64 characters after trimming; must not be unique. Ingest always uses <c>name</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    [MaxLength(64)]
    public string? DisplayName { get; init; }

    /// <summary>
    /// An optional preset logo shown next to the dataset in the DoiT console.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("logoName")]
    public LogoName? LogoName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
