using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The status for the updated test set.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status2>))]
public sealed record Status2 : OpenStringEnum<Status2>
{
    private Status2(string value) : base(value)
    {
    }

    public static readonly Status2 Importing = new("Importing");

    public static readonly Status2 PendingAnnotation = new("PendingAnnotation");

    public static readonly Status2 Deleting = new("Deleting");

    public static readonly Status2 ValidationError = new("ValidationError");

    public static readonly Status2 Ready = new("Ready");

    public TResult Match<TResult>(Func<TResult> onImporting,
        Func<TResult> onPendingAnnotation,
        Func<TResult> onDeleting,
        Func<TResult> onValidationError,
        Func<TResult> onReady,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Importing => onImporting(),
            _ when this == PendingAnnotation => onPendingAnnotation(),
            _ when this == Deleting => onDeleting(),
            _ when this == ValidationError => onValidationError(),
            _ when this == Ready => onReady(),
            _ => otherwise(Value)
        };

    public void Match(Action onImporting,
        Action onPendingAnnotation,
        Action onDeleting,
        Action onValidationError,
        Action onReady,
        Action<string> otherwise)
    {
        if (this == Importing) onImporting();
        else if (this == PendingAnnotation) onPendingAnnotation();
        else if (this == Deleting) onDeleting();
        else if (this == ValidationError) onValidationError();
        else if (this == Ready) onReady();
        else otherwise(Value);
    }
}
