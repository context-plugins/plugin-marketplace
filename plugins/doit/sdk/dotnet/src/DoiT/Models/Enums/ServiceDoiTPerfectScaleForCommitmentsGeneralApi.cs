using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Product line the policy applies to. <c>compute</c> and <c>database</c> are AWS Savings Plan lines (GCP also has <c>compute</c>); <c>cloud_sql</c> is GCP only.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ServiceDoiTPerfectScaleForCommitmentsGeneralApi>))]
public sealed record ServiceDoiTPerfectScaleForCommitmentsGeneralApi : OpenStringEnum<ServiceDoiTPerfectScaleForCommitmentsGeneralApi>
{
    private ServiceDoiTPerfectScaleForCommitmentsGeneralApi(string value) : base(value)
    {
    }

    public static readonly ServiceDoiTPerfectScaleForCommitmentsGeneralApi Compute = new("compute");

    public static readonly ServiceDoiTPerfectScaleForCommitmentsGeneralApi Database = new("database");

    public static readonly ServiceDoiTPerfectScaleForCommitmentsGeneralApi CloudSql = new("cloud_sql");

    public TResult Match<TResult>(Func<TResult> onCompute,
        Func<TResult> onDatabase,
        Func<TResult> onCloudSql,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Compute => onCompute(),
            _ when this == Database => onDatabase(),
            _ when this == CloudSql => onCloudSql(),
            _ => otherwise(Value)
        };

    public void Match(Action onCompute, Action onDatabase, Action onCloudSql, Action<string> otherwise)
    {
        if (this == Compute) onCompute();
        else if (this == Database) onDatabase();
        else if (this == CloudSql) onCloudSql();
        else otherwise(Value);
    }
}
