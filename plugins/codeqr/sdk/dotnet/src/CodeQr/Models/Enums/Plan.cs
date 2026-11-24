using System;
using System.Text.Json.Serialization;
using CodeQr.Core.Enum;

namespace CodeQr.Models.Enums;

/// <summary>
/// The plan of the project.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Plan>))]
public sealed record Plan : OpenStringEnum<Plan>
{
    private Plan(string value) : base(value)
    {
    }

    public static readonly Plan Free = new("free");

    public static readonly Plan Starter = new("starter");

    public static readonly Plan Pro = new("pro");

    public static readonly Plan Business = new("business");

    public static readonly Plan Scale = new("scale");

    public static readonly Plan Enterprise = new("enterprise");

    public TResult Match<TResult>(Func<TResult> onFree,
        Func<TResult> onStarter,
        Func<TResult> onPro,
        Func<TResult> onBusiness,
        Func<TResult> onScale,
        Func<TResult> onEnterprise,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Free => onFree(),
            _ when this == Starter => onStarter(),
            _ when this == Pro => onPro(),
            _ when this == Business => onBusiness(),
            _ when this == Scale => onScale(),
            _ when this == Enterprise => onEnterprise(),
            _ => otherwise(Value)
        };

    public void Match(Action onFree,
        Action onStarter,
        Action onPro,
        Action onBusiness,
        Action onScale,
        Action onEnterprise,
        Action<string> otherwise)
    {
        if (this == Free) onFree();
        else if (this == Starter) onStarter();
        else if (this == Pro) onPro();
        else if (this == Business) onBusiness();
        else if (this == Scale) onScale();
        else if (this == Enterprise) onEnterprise();
        else otherwise(Value);
    }
}
