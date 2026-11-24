using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SortByDoiTCommitmentManagerApi>))]
public sealed record SortByDoiTCommitmentManagerApi : OpenStringEnum<SortByDoiTCommitmentManagerApi>
{
    private SortByDoiTCommitmentManagerApi(string value) : base(value)
    {
    }

    public static readonly SortByDoiTCommitmentManagerApi Name = new("name");

    public static readonly SortByDoiTCommitmentManagerApi StartDate = new("startDate");

    public static readonly SortByDoiTCommitmentManagerApi EndDate = new("endDate");

    public static readonly SortByDoiTCommitmentManagerApi Provider = new("provider");

    public static readonly SortByDoiTCommitmentManagerApi CreateTime = new("createTime");

    public static readonly SortByDoiTCommitmentManagerApi UpdateTime = new("updateTime");

    public TResult Match<TResult>(Func<TResult> onName,
        Func<TResult> onStartDate,
        Func<TResult> onEndDate,
        Func<TResult> onProvider,
        Func<TResult> onCreateTime,
        Func<TResult> onUpdateTime,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Name => onName(),
            _ when this == StartDate => onStartDate(),
            _ when this == EndDate => onEndDate(),
            _ when this == Provider => onProvider(),
            _ when this == CreateTime => onCreateTime(),
            _ when this == UpdateTime => onUpdateTime(),
            _ => otherwise(Value)
        };

    public void Match(Action onName,
        Action onStartDate,
        Action onEndDate,
        Action onProvider,
        Action onCreateTime,
        Action onUpdateTime,
        Action<string> otherwise)
    {
        if (this == Name) onName();
        else if (this == StartDate) onStartDate();
        else if (this == EndDate) onEndDate();
        else if (this == Provider) onProvider();
        else if (this == CreateTime) onCreateTime();
        else if (this == UpdateTime) onUpdateTime();
        else otherwise(Value);
    }
}
