using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

/// <summary>
/// Determines whether a Standard or Express state machine is created. The default is STANDARD. You cannot update the type of a state machine once it has been created.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeAwsStepFunctionsStateMachinesApi>))]
public sealed record TypeAwsStepFunctionsStateMachinesApi : OpenStringEnum<TypeAwsStepFunctionsStateMachinesApi>
{
    private TypeAwsStepFunctionsStateMachinesApi(string value) : base(value)
    {
    }

    public static readonly TypeAwsStepFunctionsStateMachinesApi Standard = new("STANDARD");

    public static readonly TypeAwsStepFunctionsStateMachinesApi Express = new("EXPRESS");

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
