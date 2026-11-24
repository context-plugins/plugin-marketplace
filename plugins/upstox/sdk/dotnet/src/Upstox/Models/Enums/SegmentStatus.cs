using System;
using System.Text.Json.Serialization;
using Upstox.Core.Enum;

namespace Upstox.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SegmentStatus>))]
public sealed record SegmentStatus : OpenStringEnum<SegmentStatus>
{
    private SegmentStatus(string value) : base(value)
    {
    }

    public static readonly SegmentStatus Active = new("ACTIVE");

    public static readonly SegmentStatus Inactive = new("INACTIVE");

    public TResult Match<TResult>(Func<TResult> onActive, Func<TResult> onInactive, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Inactive => onInactive(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onInactive, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Inactive) onInactive();
        else otherwise(Value);
    }
}
