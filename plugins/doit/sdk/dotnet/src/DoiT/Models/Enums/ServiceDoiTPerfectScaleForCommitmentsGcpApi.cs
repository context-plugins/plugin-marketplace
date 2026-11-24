using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Product line these metrics belong to.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ServiceDoiTPerfectScaleForCommitmentsGcpApi>))]
public sealed record ServiceDoiTPerfectScaleForCommitmentsGcpApi : OpenStringEnum<ServiceDoiTPerfectScaleForCommitmentsGcpApi>
{
    private ServiceDoiTPerfectScaleForCommitmentsGcpApi(string value) : base(value)
    {
    }

    public static readonly ServiceDoiTPerfectScaleForCommitmentsGcpApi Compute = new("compute");

    public static readonly ServiceDoiTPerfectScaleForCommitmentsGcpApi CloudSql = new("cloud_sql");

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
