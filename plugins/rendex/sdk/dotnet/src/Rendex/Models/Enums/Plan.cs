using System;
using System.Text.Json.Serialization;
using Rendex.Core.Enum;

namespace Rendex.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Plan>))]
public sealed record Plan : OpenStringEnum<Plan>
{
    private Plan(string value) : base(value)
    {
    }

    public static readonly Plan Free = new("free");

    public static readonly Plan Starter = new("starter");

    public static readonly Plan Pro = new("pro");

    public static readonly Plan Enterprise = new("enterprise");

    public TResult Match<TResult>(Func<TResult> onFree,
        Func<TResult> onStarter,
        Func<TResult> onPro,
        Func<TResult> onEnterprise,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Free => onFree(),
            _ when this == Starter => onStarter(),
            _ when this == Pro => onPro(),
            _ when this == Enterprise => onEnterprise(),
            _ => otherwise(Value)
        };

    public void Match(Action onFree, Action onStarter, Action onPro, Action onEnterprise, Action<string> otherwise)
    {
        if (this == Free) onFree();
        else if (this == Starter) onStarter();
        else if (this == Pro) onPro();
        else if (this == Enterprise) onEnterprise();
        else otherwise(Value);
    }
}
