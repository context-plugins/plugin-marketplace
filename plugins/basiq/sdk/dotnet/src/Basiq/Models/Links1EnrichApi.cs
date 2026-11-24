using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record Links1EnrichApi
{
    /// <summary>
    /// Provides a reference link to the original query.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("self")]
    public string? Self { get; init; }

    /// <summary>
    /// Provides link to master logo. Logos are provided in a variety of formats: .svg, .png, .jpg, jpeg, gif. Where null no merchant logo is available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("logo-master")]
    public string? LogoMaster { get; init; }

    /// <summary>
    /// Provides link to thumb logo (where no thumb available master logo is returned for both). Logos are provided in a variety of formats: .svg, .png, .jpg, jpeg, gif. Where null no merchant logo is available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("logo-thumb")]
    public string? LogoThumb { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
