using System.Text.Json.Serialization;
using Fillo.Core.Models;

namespace Fillo.Models;

public record ApiV1ManageProjectIdentityResponse1
{
    [JsonPropertyName("enabled")]
    public string Enabled { get; } = "True";

    [JsonPropertyName("minted")]
    public required bool Minted { get; init; }

    /// <summary>
    /// Present only when minted is true. Shown once — store it now.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("secret")]
    public string? Secret { get; init; }

    [JsonPropertyName("protectedFormCount")]
    public required int ProtectedFormCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
