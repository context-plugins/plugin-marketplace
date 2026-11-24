using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SortBy>))]
public sealed record SortBy : OpenStringEnum<SortBy>
{
    private SortBy(string value) : base(value)
    {
    }

    public static readonly SortBy Name = new("name");

    public static readonly SortBy CreateTime = new("createTime");

    public static readonly SortBy UpdateTime = new("updateTime");

    public static readonly SortBy LastAlerted = new("lastAlerted");

    public TResult Match<TResult>(Func<TResult> onName,
        Func<TResult> onCreateTime,
        Func<TResult> onUpdateTime,
        Func<TResult> onLastAlerted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Name => onName(),
            _ when this == CreateTime => onCreateTime(),
            _ when this == UpdateTime => onUpdateTime(),
            _ when this == LastAlerted => onLastAlerted(),
            _ => otherwise(Value)
        };

    public void Match(Action onName,
        Action onCreateTime,
        Action onUpdateTime,
        Action onLastAlerted,
        Action<string> otherwise)
    {
        if (this == Name) onName();
        else if (this == CreateTime) onCreateTime();
        else if (this == UpdateTime) onUpdateTime();
        else if (this == LastAlerted) onLastAlerted();
        else otherwise(Value);
    }
}
