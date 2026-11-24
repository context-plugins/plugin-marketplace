using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;
using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Models;

public record BuildArtifacts
{
    /// <summary>
    /// Information about the location of the build artifacts.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("location")]
    public string? Location { get; init; }

    /// <summary>
    /// The SHA-256 hash of the build artifact. You can use this hash along with a checksum tool to confirm file integrity and authenticity. This value is available only if the build project's packaging value is set to ZIP.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sha256sum")]
    public string? Sha256Sum { get; init; }

    /// <summary>
    /// The MD5 hash of the build artifact. You can use this hash along with a checksum tool to confirm file integrity and authenticity. This value is available only if the build project's packaging value is set to ZIP.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("md5sum")]
    public string? Md5Sum { get; init; }

    /// <summary>
    /// If this flag is set, a name specified in the buildspec file overrides the artifact name. The name specified in a buildspec file is calculated at build time and uses the Shell Command Language. For example, you can append a date and time to your artifact name so that it is always unique.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("overrideArtifactName")]
    public bool? OverrideArtifactName { get; init; }

    /// <summary>
    /// Information that tells you if encryption for build artifacts is disabled.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("encryptionDisabled")]
    public bool? EncryptionDisabled { get; init; }

    /// <summary>
    /// An identifier for this artifact definition.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("artifactIdentifier")]
    public string? ArtifactIdentifier { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bucketOwnerAccess")]
    public BucketOwnerAccess? BucketOwnerAccess { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
