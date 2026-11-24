using System;
using System.Text.Json.Serialization;
using Cloro.Core.Enum;

namespace Cloro.Models.Enums;

/// <summary>
/// Error code identifying the failure reason.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Code5>))]
public sealed record Code5 : OpenStringEnum<Code5>
{
    private Code5(string value) : base(value)
    {
    }

    public static readonly Code5 ValidationError = new("VALIDATION_ERROR");

    public static readonly Code5 ResourceAlreadyExists = new("RESOURCE_ALREADY_EXISTS");

    public static readonly Code5 InsufficientCredits = new("INSUFFICIENT_CREDITS");

    public static readonly Code5 ModelUnavailable = new("MODEL_UNAVAILABLE");

    public TResult Match<TResult>(Func<TResult> onValidationError,
        Func<TResult> onResourceAlreadyExists,
        Func<TResult> onInsufficientCredits,
        Func<TResult> onModelUnavailable,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ValidationError => onValidationError(),
            _ when this == ResourceAlreadyExists => onResourceAlreadyExists(),
            _ when this == InsufficientCredits => onInsufficientCredits(),
            _ when this == ModelUnavailable => onModelUnavailable(),
            _ => otherwise(Value)
        };

    public void Match(Action onValidationError,
        Action onResourceAlreadyExists,
        Action onInsufficientCredits,
        Action onModelUnavailable,
        Action<string> otherwise)
    {
        if (this == ValidationError) onValidationError();
        else if (this == ResourceAlreadyExists) onResourceAlreadyExists();
        else if (this == InsufficientCredits) onInsufficientCredits();
        else if (this == ModelUnavailable) onModelUnavailable();
        else otherwise(Value);
    }
}
