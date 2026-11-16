using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The reason the evidence file failed processing. Populated when <c>state</c> is <c>FAILED</c>; <c>null</c> otherwise.
/// - <c>MALWARE_DETECTED</c>: The file was flagged for suspicious content and cannot be accepted.
/// - <c>GENERIC_FAILURE</c>: An unexpected error occurred. Contact support for details.
/// - <c>FILE_SIZE_LIMIT_EXCEEDED</c>: The file exceeds the maximum allowed file size.
/// - <c>TOTAL_COMBINED_FILE_SIZE_LIMIT_EXCEEDED</c>: The total size of all uploaded evidence exceeds the maximum combined file size limit.
/// - <c>TOTAL_PAGE_COUNT_LIMIT_EXCEEDED</c>: The total number of pages across all uploaded evidence exceeds the maximum allowed page count.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<FailureCode1>))]
public sealed record FailureCode1 : OpenStringEnum<FailureCode1>
{
    private FailureCode1(string value) : base(value)
    {
    }

    public static readonly FailureCode1 MalwareDetected = new("MALWARE_DETECTED");

    public static readonly FailureCode1 GenericFailure = new("GENERIC_FAILURE");

    public static readonly FailureCode1 FileSizeLimitExceeded = new("FILE_SIZE_LIMIT_EXCEEDED");

    public static readonly FailureCode1 TotalCombinedFileSizeLimitExceeded = new(
        "TOTAL_COMBINED_FILE_SIZE_LIMIT_EXCEEDED");

    public static readonly FailureCode1 TotalPageCountLimitExceeded = new("TOTAL_PAGE_COUNT_LIMIT_EXCEEDED");

    public TResult Match<TResult>(Func<TResult> onMalwareDetected,
        Func<TResult> onGenericFailure,
        Func<TResult> onFileSizeLimitExceeded,
        Func<TResult> onTotalCombinedFileSizeLimitExceeded,
        Func<TResult> onTotalPageCountLimitExceeded,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == MalwareDetected => onMalwareDetected(),
            _ when this == GenericFailure => onGenericFailure(),
            _ when this == FileSizeLimitExceeded => onFileSizeLimitExceeded(),
            _ when this == TotalCombinedFileSizeLimitExceeded => onTotalCombinedFileSizeLimitExceeded(),
            _ when this == TotalPageCountLimitExceeded => onTotalPageCountLimitExceeded(),
            _ => otherwise(Value)
        };

    public void Match(Action onMalwareDetected,
        Action onGenericFailure,
        Action onFileSizeLimitExceeded,
        Action onTotalCombinedFileSizeLimitExceeded,
        Action onTotalPageCountLimitExceeded,
        Action<string> otherwise)
    {
        if (this == MalwareDetected) onMalwareDetected();
        else if (this == GenericFailure) onGenericFailure();
        else if (this == FileSizeLimitExceeded) onFileSizeLimitExceeded();
        else if (this == TotalCombinedFileSizeLimitExceeded) onTotalCombinedFileSizeLimitExceeded();
        else if (this == TotalPageCountLimitExceeded) onTotalPageCountLimitExceeded();
        else otherwise(Value);
    }
}
