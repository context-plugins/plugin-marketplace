using System;
using System.Text.Json.Serialization;
using Compabase.Core.Enum;

namespace Compabase.Models.Enums;

/// <summary>
/// Machine-readable domain error code.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Code>))]
public sealed record Code : OpenStringEnum<Code>
{
    private Code(string value) : base(value)
    {
    }

    public static readonly Code InvalidKrs = new("INVALID_KRS");

    public static readonly Code InvalidNip = new("INVALID_NIP");

    public static readonly Code InvalidCursor = new("INVALID_CURSOR");

    public static readonly Code InvalidRange = new("INVALID_RANGE");

    public static readonly Code InvalidParameter = new("INVALID_PARAMETER");

    public static readonly Code ConflictingParameters = new("CONFLICTING_PARAMETERS");

    public static readonly Code InvalidBoolean = new("INVALID_BOOLEAN");

    public static readonly Code InvalidKeywords = new("INVALID_KEYWORDS");

    public static readonly Code InvalidApiKey = new("INVALID_API_KEY");

    public static readonly Code Unauthorized = new("UNAUTHORIZED");

    public static readonly Code NotFound = new("NOT_FOUND");

    public static readonly Code QuotaExceeded = new("QUOTA_EXCEEDED");

    public TResult Match<TResult>(Func<TResult> onInvalidKrs,
        Func<TResult> onInvalidNip,
        Func<TResult> onInvalidCursor,
        Func<TResult> onInvalidRange,
        Func<TResult> onInvalidParameter,
        Func<TResult> onConflictingParameters,
        Func<TResult> onInvalidBoolean,
        Func<TResult> onInvalidKeywords,
        Func<TResult> onInvalidApiKey,
        Func<TResult> onUnauthorized,
        Func<TResult> onNotFound,
        Func<TResult> onQuotaExceeded,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == InvalidKrs => onInvalidKrs(),
            _ when this == InvalidNip => onInvalidNip(),
            _ when this == InvalidCursor => onInvalidCursor(),
            _ when this == InvalidRange => onInvalidRange(),
            _ when this == InvalidParameter => onInvalidParameter(),
            _ when this == ConflictingParameters => onConflictingParameters(),
            _ when this == InvalidBoolean => onInvalidBoolean(),
            _ when this == InvalidKeywords => onInvalidKeywords(),
            _ when this == InvalidApiKey => onInvalidApiKey(),
            _ when this == Unauthorized => onUnauthorized(),
            _ when this == NotFound => onNotFound(),
            _ when this == QuotaExceeded => onQuotaExceeded(),
            _ => otherwise(Value)
        };

    public void Match(Action onInvalidKrs,
        Action onInvalidNip,
        Action onInvalidCursor,
        Action onInvalidRange,
        Action onInvalidParameter,
        Action onConflictingParameters,
        Action onInvalidBoolean,
        Action onInvalidKeywords,
        Action onInvalidApiKey,
        Action onUnauthorized,
        Action onNotFound,
        Action onQuotaExceeded,
        Action<string> otherwise)
    {
        if (this == InvalidKrs) onInvalidKrs();
        else if (this == InvalidNip) onInvalidNip();
        else if (this == InvalidCursor) onInvalidCursor();
        else if (this == InvalidRange) onInvalidRange();
        else if (this == InvalidParameter) onInvalidParameter();
        else if (this == ConflictingParameters) onConflictingParameters();
        else if (this == InvalidBoolean) onInvalidBoolean();
        else if (this == InvalidKeywords) onInvalidKeywords();
        else if (this == InvalidApiKey) onInvalidApiKey();
        else if (this == Unauthorized) onUnauthorized();
        else if (this == NotFound) onNotFound();
        else if (this == QuotaExceeded) onQuotaExceeded();
        else otherwise(Value);
    }
}
