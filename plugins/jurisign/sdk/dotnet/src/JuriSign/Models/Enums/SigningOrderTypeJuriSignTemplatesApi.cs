using System;
using System.Text.Json.Serialization;
using JuriSign.Core.Enum;

namespace JuriSign.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SigningOrderTypeJuriSignTemplatesApi>))]
public sealed record SigningOrderTypeJuriSignTemplatesApi : OpenStringEnum<SigningOrderTypeJuriSignTemplatesApi>
{
    private SigningOrderTypeJuriSignTemplatesApi(string value) : base(value)
    {
    }

    public static readonly SigningOrderTypeJuriSignTemplatesApi Parallel = new("parallel");

    public static readonly SigningOrderTypeJuriSignTemplatesApi Sequential = new("sequential");

    public TResult Match<TResult>(Func<TResult> onParallel,
        Func<TResult> onSequential,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Parallel => onParallel(),
            _ when this == Sequential => onSequential(),
            _ => otherwise(Value)
        };

    public void Match(Action onParallel, Action onSequential, Action<string> otherwise)
    {
        if (this == Parallel) onParallel();
        else if (this == Sequential) onSequential();
        else otherwise(Value);
    }
}
