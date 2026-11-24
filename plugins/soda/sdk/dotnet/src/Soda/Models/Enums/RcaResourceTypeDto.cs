using System;
using System.Text.Json.Serialization;
using Soda.Core.Enum;

namespace Soda.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<RcaResourceTypeDto>))]
public sealed record RcaResourceTypeDto : OpenStringEnum<RcaResourceTypeDto>
{
    private RcaResourceTypeDto(string value) : base(value)
    {
    }

    public static readonly RcaResourceTypeDto Dataset = new("dataset");

    public static readonly RcaResourceTypeDto Datasource = new("datasource");

    public static readonly RcaResourceTypeDto Check = new("check");

    public static readonly RcaResourceTypeDto CheckResult = new("checkResult");

    public TResult Match<TResult>(Func<TResult> onDataset,
        Func<TResult> onDatasource,
        Func<TResult> onCheck,
        Func<TResult> onCheckResult,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Dataset => onDataset(),
            _ when this == Datasource => onDatasource(),
            _ when this == Check => onCheck(),
            _ when this == CheckResult => onCheckResult(),
            _ => otherwise(Value)
        };

    public void Match(Action onDataset,
        Action onDatasource,
        Action onCheck,
        Action onCheckResult,
        Action<string> otherwise)
    {
        if (this == Dataset) onDataset();
        else if (this == Datasource) onDatasource();
        else if (this == Check) onCheck();
        else if (this == CheckResult) onCheckResult();
        else otherwise(Value);
    }
}
