using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

/// <summary>
/// The target type of state machine for this definition. The default is STANDARD.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeAwsStepFunctionsOperationsApi>))]
public sealed record TypeAwsStepFunctionsOperationsApi : OpenStringEnum<TypeAwsStepFunctionsOperationsApi>
{
    private TypeAwsStepFunctionsOperationsApi(string value) : base(value)
    {
    }

    public static readonly TypeAwsStepFunctionsOperationsApi Standard = new("STANDARD");

    public static readonly TypeAwsStepFunctionsOperationsApi Express = new("EXPRESS");

    public TResult Match<TResult>(Func<TResult> onStandard, Func<TResult> onExpress, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Standard => onStandard(),
            _ when this == Express => onExpress(),
            _ => otherwise(Value)
        };

    public void Match(Action onStandard, Action onExpress, Action<string> otherwise)
    {
        if (this == Standard) onStandard();
        else if (this == Express) onExpress();
        else otherwise(Value);
    }
}
