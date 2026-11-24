using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DoiT.Models.Enums;

namespace DoiT.Models;

public record DatahubV1DatasetsRequest2
{
    /// <summary>
    /// Must match the dataset name in the URL path. Included for idempotency; the name cannot be changed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// The new description for the dataset. Omit to keep the current description; send an empty string to clear it.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Human-readable name shown in the DoiT console and in report results instead of <c>name</c>. 1-64 characters after trimming; must not be unique. Omit to keep the current display name; send an empty string to clear it and fall back to <c>name</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    [MaxLength(64)]
    public string? DisplayName { get; init; }

    /// <summary>
    /// The preset logo shown next to the dataset in the DoiT console. Omit to keep the current logo; send an empty string to clear it.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("logoName")]
    public LogoName1? LogoName { get; init; }
}
