using System;
using System.Text.Json.Serialization;
using Lusha.Core.Enum;

namespace Lusha.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Code1>))]
public sealed record Code1 : OpenStringEnum<Code1>
{
    private Code1(string value) : base(value)
    {
    }

    public static readonly Code1 ValidationError = new("VALIDATION_ERROR");

    public static readonly Code1 DuplicateSubscription = new("DUPLICATE_SUBSCRIPTION");

    public static readonly Code1 UrlValidationFailed = new("URL_VALIDATION_FAILED");

    public static readonly Code1 WebhookVerificationFailed = new("WEBHOOK_VERIFICATION_FAILED");

    public static readonly Code1 Forbidden = new("FORBIDDEN");

    public static readonly Code1 UnknownError = new("UNKNOWN_ERROR");

    public TResult Match<TResult>(Func<TResult> onValidationError,
        Func<TResult> onDuplicateSubscription,
        Func<TResult> onUrlValidationFailed,
        Func<TResult> onWebhookVerificationFailed,
        Func<TResult> onForbidden,
        Func<TResult> onUnknownError,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ValidationError => onValidationError(),
            _ when this == DuplicateSubscription => onDuplicateSubscription(),
            _ when this == UrlValidationFailed => onUrlValidationFailed(),
            _ when this == WebhookVerificationFailed => onWebhookVerificationFailed(),
            _ when this == Forbidden => onForbidden(),
            _ when this == UnknownError => onUnknownError(),
            _ => otherwise(Value)
        };

    public void Match(Action onValidationError,
        Action onDuplicateSubscription,
        Action onUrlValidationFailed,
        Action onWebhookVerificationFailed,
        Action onForbidden,
        Action onUnknownError,
        Action<string> otherwise)
    {
        if (this == ValidationError) onValidationError();
        else if (this == DuplicateSubscription) onDuplicateSubscription();
        else if (this == UrlValidationFailed) onUrlValidationFailed();
        else if (this == WebhookVerificationFailed) onWebhookVerificationFailed();
        else if (this == Forbidden) onForbidden();
        else if (this == UnknownError) onUnknownError();
        else otherwise(Value);
    }
}
