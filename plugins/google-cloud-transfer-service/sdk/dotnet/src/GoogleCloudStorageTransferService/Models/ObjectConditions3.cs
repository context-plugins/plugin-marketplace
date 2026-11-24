using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudStorageTransferService.Core.Models;

namespace GoogleCloudStorageTransferService.Models;

/// <summary>
/// Only objects that satisfy these object conditions are included in the set of data source and data sink objects. Object conditions based on objects' "last modification time" do not exclude objects in a data sink.
/// </summary>
public record ObjectConditions3
{
    /// <summary>
    /// If you specify <c>include_prefixes</c>, Storage Transfer Service uses the items in the <c>include_prefixes</c> array to determine which objects to include in a transfer. Objects must start with one of the matching <c>include_prefixes</c> for inclusion in the transfer. If exclude_prefixes is specified, objects must not start with any of the <c>exclude_prefixes</c> specified for inclusion in the transfer. The following are requirements of <c>include_prefixes</c>: * Each include-prefix can contain any sequence of Unicode characters, to a max length of 1024 bytes when UTF8-encoded, and must not contain Carriage Return or Line Feed characters. Wildcard matching and regular expression matching are not supported. * Each include-prefix must omit the leading slash. For example, to include the object <c>s3://my-aws-bucket/logs/y=2015/requests.gz</c>, specify the include-prefix as <c>logs/y=2015/requests.gz</c>. * None of the include-prefix values can be empty, if specified. * Each include-prefix must include a distinct portion of the object namespace. No include-prefix may be a prefix of another include-prefix. The max size of <c>include_prefixes</c> is 1000. For more information, see <see href="/storage-transfer/docs/filtering-objects-from-transfers">Filtering objects from transfers</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("includePrefixes")]
    public IReadOnlyList<string>? IncludePrefixes { get; init; }

    /// <summary>
    /// Optional. If specified, only objects matching this glob are transferred.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("matchGlob")]
    public string? MatchGlob { get; init; }

    /// <summary>
    /// Optional. If specified, objects in the source matching any of the storage classes in this field will be transferred. Objects in storage classes not included in this field will be skipped. If empty, the default behavior regarding the storage classes is applied. This includes all storage classes except "GLACIER" as per default behavior. Currently, this field only supports S3 data source. For the list of valid Amazon S3 storage classnames, please refer to the AWS documentation: https://docs.aws.amazon.com/AmazonS3/latest/userguide/sc-howtoset.html
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("includeStorageClasses")]
    public IReadOnlyList<string>? IncludeStorageClasses { get; init; }

    /// <summary>
    /// If specified, only objects with a "last modification time" before this timestamp and objects that don't have a "last modification time" are transferred.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastModifiedBefore")]
    public string? LastModifiedBefore { get; init; }

    /// <summary>
    /// If you specify <c>exclude_prefixes</c>, Storage Transfer Service uses the items in the <c>exclude_prefixes</c> array to determine which objects to exclude from a transfer. Objects must not start with one of the matching <c>exclude_prefixes</c> for inclusion in a transfer. The following are requirements of <c>exclude_prefixes</c>: * Each exclude-prefix can contain any sequence of Unicode characters, to a max length of 1024 bytes when UTF8-encoded, and must not contain Carriage Return or Line Feed characters. Wildcard matching and regular expression matching are not supported. * Each exclude-prefix must omit the leading slash. For example, to exclude the object <c>s3://my-aws-bucket/logs/y=2015/requests.gz</c>, specify the exclude-prefix as <c>logs/y=2015/requests.gz</c>. * None of the exclude-prefix values can be empty, if specified. * Each exclude-prefix must exclude a distinct portion of the object namespace. No exclude-prefix may be a prefix of another exclude-prefix. * If include_prefixes is specified, then each exclude-prefix must start with the value of a path explicitly included by <c>include_prefixes</c>. The max size of <c>exclude_prefixes</c> is 1000. For more information, see <see href="/storage-transfer/docs/filtering-objects-from-transfers">Filtering objects from transfers</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludePrefixes")]
    public IReadOnlyList<string>? ExcludePrefixes { get; init; }

    /// <summary>
    /// Ensures that objects are not transferred if a specific maximum time has elapsed since the "last modification time". When a TransferOperation begins, objects with a "last modification time" are transferred only if the elapsed time between the start_time of the <c>TransferOperation</c>and the "last modification time" of the object is less than the value of max_time_elapsed_since_last_modification`. Objects that do not have a "last modification time" are also transferred.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxTimeElapsedSinceLastModification")]
    public string? MaxTimeElapsedSinceLastModification { get; init; }

    /// <summary>
    /// Ensures that objects are not transferred until a specific minimum time has elapsed after the "last modification time". When a TransferOperation begins, objects with a "last modification time" are transferred only if the elapsed time between the start_time of the <c>TransferOperation</c> and the "last modification time" of the object is equal to or greater than the value of min_time_elapsed_since_last_modification`. Objects that do not have a "last modification time" are also transferred.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("minTimeElapsedSinceLastModification")]
    public string? MinTimeElapsedSinceLastModification { get; init; }

    /// <summary>
    /// If specified, only objects with a "last modification time" on or after this timestamp and objects that don't have a "last modification time" are transferred. The <c>last_modified_since</c> and <c>last_modified_before</c> fields can be used together for chunked data processing. For example, consider a script that processes each day's worth of data at a time. For that you'd set each of the fields as follows: * <c>last_modified_since</c> to the start of the day * <c>last_modified_before</c> to the end of the day
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastModifiedSince")]
    public string? LastModifiedSince { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
