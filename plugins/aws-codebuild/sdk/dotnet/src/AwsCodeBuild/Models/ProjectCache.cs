using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;
using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Models;

public record ProjectCache
{
    /// <summary>
    /// The type of cache used by the build project. Valid values include: NO_CACHE: The build project does not use any cache. S3: The build project reads and writes from and to S3. LOCAL: The build project stores a cache locally on a build host that is only available to that build host.
    /// </summary>
    [JsonPropertyName("type")]
    public required Type2AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi Type { get; init; }

    /// <summary>
    /// Information about the cache location: NO_CACHE or LOCAL: This value is ignored. S3: This is the S3 bucket name/prefix.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("location")]
    public string? Location { get; init; }

    /// <summary>
    /// An array of strings that specify the local cache modes. You can use one or more local cache modes at the same time. This is only used for LOCAL cache types. Possible values are: LOCAL_SOURCE_CACHE Caches Git metadata for primary and secondary sources. After the cache is created, subsequent builds pull only the change between commits. This mode is a good choice for projects with a clean working directory and a source that is a large Git repository. If you choose this option and your project does not use a Git repository (GitHub, GitHub Enterprise, or Bitbucket), the option is ignored. LOCAL_DOC
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("modes")]
    public IReadOnlyList<Mode>? Modes { get; init; }

    /// <summary>
    /// Defines the scope of the cache. You can use this namespace to share a cache across multiple projects. For more information, see Cache sharing between projects in the CodeBuild User Guide.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cacheNamespace")]
    public string? CacheNamespace { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
