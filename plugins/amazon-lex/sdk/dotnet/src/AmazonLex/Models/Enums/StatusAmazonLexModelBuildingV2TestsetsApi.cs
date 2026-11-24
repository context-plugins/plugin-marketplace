using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The status of the test set.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusAmazonLexModelBuildingV2TestsetsApi>))]
public sealed record StatusAmazonLexModelBuildingV2TestsetsApi : OpenStringEnum<StatusAmazonLexModelBuildingV2TestsetsApi>
{
    private StatusAmazonLexModelBuildingV2TestsetsApi(string value) : base(value)
    {
    }

    public static readonly StatusAmazonLexModelBuildingV2TestsetsApi Importing = new("Importing");

    public static readonly StatusAmazonLexModelBuildingV2TestsetsApi PendingAnnotation = new("PendingAnnotation");

    public static readonly StatusAmazonLexModelBuildingV2TestsetsApi Deleting = new("Deleting");

    public static readonly StatusAmazonLexModelBuildingV2TestsetsApi ValidationError = new("ValidationError");

    public static readonly StatusAmazonLexModelBuildingV2TestsetsApi Ready = new("Ready");

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
