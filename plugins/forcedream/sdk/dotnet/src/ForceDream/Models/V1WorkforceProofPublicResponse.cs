using System.Text.Json.Serialization;
using ForceDream.Core.Models;

namespace ForceDream.Models;

public record V1WorkforceProofPublicResponse
{
    /// <summary>
    /// The exact fields signed and verified. See x-forcedream-canonicalization for the precise reduced "signable" object this maps to -- it is not simply this whole object.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("proof")]
    public FdProof? Proof { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
