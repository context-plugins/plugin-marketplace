using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Product line this onboarding status belongs to.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Service1DoiTPerfectScaleForCommitmentsGcpApi>))]
public sealed record Service1DoiTPerfectScaleForCommitmentsGcpApi : OpenStringEnum<Service1DoiTPerfectScaleForCommitmentsGcpApi>
{
    private Service1DoiTPerfectScaleForCommitmentsGcpApi(string value) : base(value)
    {
    }

    public static readonly Service1DoiTPerfectScaleForCommitmentsGcpApi Compute = new("compute");

    public static readonly Service1DoiTPerfectScaleForCommitmentsGcpApi CloudSql = new("cloud_sql");

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
