using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record EnumOptionInsertRequest
{
    /// <summary>
    /// The gid of the enum option to relocate.
    /// </summary>
    [JsonPropertyName("enum_option")]
    public required string EnumOption { get; init; }

    /// <summary>
    /// An existing enum option within this custom field before which the new enum option should be inserted. Cannot be provided together with after_enum_option.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("before_enum_option")]
    public string? BeforeEnumOption { get; init; }

    /// <summary>
    /// An existing enum option within this custom field after which the new enum option should be inserted. Cannot be provided together with before_enum_option.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("after_enum_option")]
    public string? AfterEnumOption { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
