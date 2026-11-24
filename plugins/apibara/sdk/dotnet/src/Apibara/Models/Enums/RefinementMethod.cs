using System;
using System.Text.Json.Serialization;
using Apibara.Core.Enum;

namespace Apibara.Models.Enums;

/// <summary>
/// Optional high/low-trim refinement. engine_mileage is preferred when at least 5 final-sale comparables exist in the target engine+mileage band; engine is the fallback when at least 5 engine-matched final sales exist.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RefinementMethod>))]
public sealed record RefinementMethod : OpenStringEnum<RefinementMethod>
{
    private RefinementMethod(string value) : base(value)
    {
    }

    public static readonly RefinementMethod EngineMileage = new("engine_mileage");

    public static readonly RefinementMethod Engine = new("engine");

    public TResult Match<TResult>(Func<TResult> onEngineMileage,
        Func<TResult> onEngine,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == EngineMileage => onEngineMileage(),
            _ when this == Engine => onEngine(),
            _ => otherwise(Value)
        };

    public void Match(Action onEngineMileage, Action onEngine, Action<string> otherwise)
    {
        if (this == EngineMileage) onEngineMileage();
        else if (this == Engine) onEngine();
        else otherwise(Value);
    }
}
