using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Service2>))]
public sealed record Service2 : OpenStringEnum<Service2>
{
    private Service2(string value) : base(value)
    {
    }

    public static readonly Service2 Compute = new("compute");

    public static readonly Service2 Database = new("database");

    public TResult Match<TResult>(Func<TResult> onCompute, Func<TResult> onDatabase, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Compute => onCompute(),
            _ when this == Database => onDatabase(),
            _ => otherwise(Value)
        };

    public void Match(Action onCompute, Action onDatabase, Action<string> otherwise)
    {
        if (this == Compute) onCompute();
        else if (this == Database) onDatabase();
        else otherwise(Value);
    }
}
