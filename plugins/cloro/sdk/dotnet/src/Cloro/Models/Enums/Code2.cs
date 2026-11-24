using System;
using System.Text.Json.Serialization;
using Cloro.Core.Enum;

namespace Cloro.Models.Enums;

/// <summary>
/// Error code identifying the failure reason.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Code2>))]
public sealed record Code2 : OpenStringEnum<Code2>
{
    private Code2(string value) : base(value)
    {
    }

    public static readonly Code2 ValidationError = new("VALIDATION_ERROR");

    public static readonly Code2 ResourceAlreadyExists = new("RESOURCE_ALREADY_EXISTS");

    public static readonly Code2 InsufficientCredits = new("INSUFFICIENT_CREDITS");

    public TResult Match<TResult>(Func<TResult> onValidationError,
        Func<TResult> onResourceAlreadyExists,
        Func<TResult> onInsufficientCredits,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ValidationError => onValidationError(),
            _ when this == ResourceAlreadyExists => onResourceAlreadyExists(),
            _ when this == InsufficientCredits => onInsufficientCredits(),
            _ => otherwise(Value)
        };

    public void Match(Action onValidationError,
        Action onResourceAlreadyExists,
        Action onInsufficientCredits,
        Action<string> otherwise)
    {
        if (this == ValidationError) onValidationError();
        else if (this == ResourceAlreadyExists) onResourceAlreadyExists();
        else if (this == InsufficientCredits) onInsufficientCredits();
        else otherwise(Value);
    }
}
