using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ServiceId>))]
public sealed record ServiceId : OpenStringEnum<ServiceId>
{
    private ServiceId(string value) : base(value)
    {
    }

    public static readonly ServiceId Compute = new("compute");

    public static readonly ServiceId Database = new("database");

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
