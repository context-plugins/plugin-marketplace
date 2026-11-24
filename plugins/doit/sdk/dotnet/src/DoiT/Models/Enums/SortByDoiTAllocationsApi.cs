using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SortByDoiTAllocationsApi>))]
public sealed record SortByDoiTAllocationsApi : OpenStringEnum<SortByDoiTAllocationsApi>
{
    private SortByDoiTAllocationsApi(string value) : base(value)
    {
    }

    public static readonly SortByDoiTAllocationsApi Id = new("id");

    public static readonly SortByDoiTAllocationsApi Name = new("name");

    public static readonly SortByDoiTAllocationsApi Owner = new("owner");

    public static readonly SortByDoiTAllocationsApi Description = new("description");

    public static readonly SortByDoiTAllocationsApi Type = new("type");

    public static readonly SortByDoiTAllocationsApi CreateTime = new("createTime");

    public static readonly SortByDoiTAllocationsApi UpdateTime = new("updateTime");

    public TResult Match<TResult>(Func<TResult> onId,
        Func<TResult> onName,
        Func<TResult> onOwner,
        Func<TResult> onDescription,
        Func<TResult> onType,
        Func<TResult> onCreateTime,
        Func<TResult> onUpdateTime,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Id => onId(),
            _ when this == Name => onName(),
            _ when this == Owner => onOwner(),
            _ when this == Description => onDescription(),
            _ when this == Type => onType(),
            _ when this == CreateTime => onCreateTime(),
            _ when this == UpdateTime => onUpdateTime(),
            _ => otherwise(Value)
        };

    public void Match(Action onId,
        Action onName,
        Action onOwner,
        Action onDescription,
        Action onType,
        Action onCreateTime,
        Action onUpdateTime,
        Action<string> otherwise)
    {
        if (this == Id) onId();
        else if (this == Name) onName();
        else if (this == Owner) onOwner();
        else if (this == Description) onDescription();
        else if (this == Type) onType();
        else if (this == CreateTime) onCreateTime();
        else if (this == UpdateTime) onUpdateTime();
        else otherwise(Value);
    }
}
