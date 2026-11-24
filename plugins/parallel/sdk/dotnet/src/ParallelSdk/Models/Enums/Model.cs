using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Enum;

namespace ParallelSdk.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Model>))]
public sealed record Model : OpenStringEnum<Model>
{
    private Model(string value) : base(value)
    {
    }

    public static readonly Model Parallel = new("parallel");

    public TResult Match<TResult>(Func<TResult> onParallel, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Parallel => onParallel(),
            _ => otherwise(Value)
        };

    public void Match(Action onParallel, Action<string> otherwise)
    {
        if (this == Parallel) onParallel();
        else otherwise(Value);
    }
}
