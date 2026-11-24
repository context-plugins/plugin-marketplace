using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Type4>))]
public sealed record Type4 : OpenStringEnum<Type4>
{
    private Type4(string value) : base(value)
    {
    }

    public static readonly Type4 Standard = new("STANDARD");

    public static readonly Type4 Express = new("EXPRESS");

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
