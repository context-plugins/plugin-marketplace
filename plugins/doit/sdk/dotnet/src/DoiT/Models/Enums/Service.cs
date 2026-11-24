using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Commitment type this projection belongs to (<c>compute</c> or <c>database</c>).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Service>))]
public sealed record Service : OpenStringEnum<Service>
{
    private Service(string value) : base(value)
    {
    }

    public static readonly Service Compute = new("compute");

    public static readonly Service Database = new("database");

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
