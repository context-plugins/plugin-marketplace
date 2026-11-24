using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// PS4C product line (<c>gcp_service</c>) this recommendation belongs to.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Service3>))]
public sealed record Service3 : OpenStringEnum<Service3>
{
    private Service3(string value) : base(value)
    {
    }

    public static readonly Service3 Compute = new("compute");

    public static readonly Service3 CloudSql = new("cloud_sql");

    public TResult Match<TResult>(Func<TResult> onCompute, Func<TResult> onCloudSql, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Compute => onCompute(),
            _ when this == CloudSql => onCloudSql(),
            _ => otherwise(Value)
        };

    public void Match(Action onCompute, Action onCloudSql, Action<string> otherwise)
    {
        if (this == Compute) onCompute();
        else if (this == CloudSql) onCloudSql();
        else otherwise(Value);
    }
}
