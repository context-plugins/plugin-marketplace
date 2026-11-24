using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Commitment type these settings apply to.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Service1>))]
public sealed record Service1 : OpenStringEnum<Service1>
{
    private Service1(string value) : base(value)
    {
    }

    public static readonly Service1 Compute = new("compute");

    public static readonly Service1 Database = new("database");

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
