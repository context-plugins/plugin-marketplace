using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

/// <summary>
/// Error code for the failed job.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CodeAmazonRekognitionMediaAnalysisJobApi>))]
public sealed record CodeAmazonRekognitionMediaAnalysisJobApi : OpenStringEnum<CodeAmazonRekognitionMediaAnalysisJobApi>
{
    private CodeAmazonRekognitionMediaAnalysisJobApi(string value) : base(value)
    {
    }

    public static readonly CodeAmazonRekognitionMediaAnalysisJobApi InternalError = new("INTERNAL_ERROR");

    public static readonly CodeAmazonRekognitionMediaAnalysisJobApi InvalidS3Object = new("INVALID_S3_OBJECT");

    public static readonly CodeAmazonRekognitionMediaAnalysisJobApi InvalidManifest = new("INVALID_MANIFEST");

    public static readonly CodeAmazonRekognitionMediaAnalysisJobApi InvalidOutputConfig = new("INVALID_OUTPUT_CONFIG");

    public static readonly CodeAmazonRekognitionMediaAnalysisJobApi InvalidKmsKey = new("INVALID_KMS_KEY");

    public static readonly CodeAmazonRekognitionMediaAnalysisJobApi AccessDenied = new("ACCESS_DENIED");

    public static readonly CodeAmazonRekognitionMediaAnalysisJobApi ResourceNotFound = new("RESOURCE_NOT_FOUND");

    public static readonly CodeAmazonRekognitionMediaAnalysisJobApi ResourceNotReady = new("RESOURCE_NOT_READY");

    public static readonly CodeAmazonRekognitionMediaAnalysisJobApi Throttled = new("THROTTLED");

    public TResult Match<TResult>(Func<TResult> onInternalError,
        Func<TResult> onInvalidS3Object,
        Func<TResult> onInvalidManifest,
        Func<TResult> onInvalidOutputConfig,
        Func<TResult> onInvalidKmsKey,
        Func<TResult> onAccessDenied,
        Func<TResult> onResourceNotFound,
        Func<TResult> onResourceNotReady,
        Func<TResult> onThrottled,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == InternalError => onInternalError(),
            _ when this == InvalidS3Object => onInvalidS3Object(),
            _ when this == InvalidManifest => onInvalidManifest(),
            _ when this == InvalidOutputConfig => onInvalidOutputConfig(),
            _ when this == InvalidKmsKey => onInvalidKmsKey(),
            _ when this == AccessDenied => onAccessDenied(),
            _ when this == ResourceNotFound => onResourceNotFound(),
            _ when this == ResourceNotReady => onResourceNotReady(),
            _ when this == Throttled => onThrottled(),
            _ => otherwise(Value)
        };

    public void Match(Action onInternalError,
        Action onInvalidS3Object,
        Action onInvalidManifest,
        Action onInvalidOutputConfig,
        Action onInvalidKmsKey,
        Action onAccessDenied,
        Action onResourceNotFound,
        Action onResourceNotReady,
        Action onThrottled,
        Action<string> otherwise)
    {
        if (this == InternalError) onInternalError();
        else if (this == InvalidS3Object) onInvalidS3Object();
        else if (this == InvalidManifest) onInvalidManifest();
        else if (this == InvalidOutputConfig) onInvalidOutputConfig();
        else if (this == InvalidKmsKey) onInvalidKmsKey();
        else if (this == AccessDenied) onAccessDenied();
        else if (this == ResourceNotFound) onResourceNotFound();
        else if (this == ResourceNotReady) onResourceNotReady();
        else if (this == Throttled) onThrottled();
        else otherwise(Value);
    }
}
