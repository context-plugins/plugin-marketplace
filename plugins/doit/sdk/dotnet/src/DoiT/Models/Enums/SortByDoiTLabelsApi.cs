using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SortByDoiTLabelsApi>))]
public sealed record SortByDoiTLabelsApi : OpenStringEnum<SortByDoiTLabelsApi>
{
    private SortByDoiTLabelsApi(string value) : base(value)
    {
    }

    public static readonly SortByDoiTLabelsApi Id = new("id");

    public static readonly SortByDoiTLabelsApi Name = new("name");

    public static readonly SortByDoiTLabelsApi Type = new("type");

    public static readonly SortByDoiTLabelsApi CreateTime = new("createTime");

    public static readonly SortByDoiTLabelsApi UpdateTime = new("updateTime");

    public TResult Match<TResult>(Func<TResult> onId,
        Func<TResult> onName,
        Func<TResult> onType,
        Func<TResult> onCreateTime,
        Func<TResult> onUpdateTime,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Id => onId(),
            _ when this == Name => onName(),
            _ when this == Type => onType(),
            _ when this == CreateTime => onCreateTime(),
            _ when this == UpdateTime => onUpdateTime(),
            _ => otherwise(Value)
        };

    public void Match(Action onId,
        Action onName,
        Action onType,
        Action onCreateTime,
        Action onUpdateTime,
        Action<string> otherwise)
    {
        if (this == Id) onId();
        else if (this == Name) onName();
        else if (this == Type) onType();
        else if (this == CreateTime) onCreateTime();
        else if (this == UpdateTime) onUpdateTime();
        else otherwise(Value);
    }
}
