using System;
using System.Text.Json.Serialization;
using Lusha.Core.Enum;

namespace Lusha.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<CodeLushaWebhooksApi>))]
public sealed record CodeLushaWebhooksApi : OpenStringEnum<CodeLushaWebhooksApi>
{
    private CodeLushaWebhooksApi(string value) : base(value)
    {
    }

    public static readonly CodeLushaWebhooksApi NotFound = new("NOT_FOUND");

    public static readonly CodeLushaWebhooksApi ValidationError = new("VALIDATION_ERROR");

    public static readonly CodeLushaWebhooksApi Forbidden = new("FORBIDDEN");

    public static readonly CodeLushaWebhooksApi UnknownError = new("UNKNOWN_ERROR");

    public TResult Match<TResult>(Func<TResult> onNotFound,
        Func<TResult> onValidationError,
        Func<TResult> onForbidden,
        Func<TResult> onUnknownError,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == NotFound => onNotFound(),
            _ when this == ValidationError => onValidationError(),
            _ when this == Forbidden => onForbidden(),
            _ when this == UnknownError => onUnknownError(),
            _ => otherwise(Value)
        };

    public void Match(Action onNotFound,
        Action onValidationError,
        Action onForbidden,
        Action onUnknownError,
        Action<string> otherwise)
    {
        if (this == NotFound) onNotFound();
        else if (this == ValidationError) onValidationError();
        else if (this == Forbidden) onForbidden();
        else if (this == UnknownError) onUnknownError();
        else otherwise(Value);
    }
}
