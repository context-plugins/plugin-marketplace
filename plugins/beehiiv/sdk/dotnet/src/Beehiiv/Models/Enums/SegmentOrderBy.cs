using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SegmentOrderBy>))]
public sealed record SegmentOrderBy : OpenStringEnum<SegmentOrderBy>
{
    private SegmentOrderBy(string value) : base(value)
    {
    }

    public static readonly SegmentOrderBy Created = new("created");

    public static readonly SegmentOrderBy LastCalculated = new("last_calculated");

    public TResult Match<TResult>(Func<TResult> onCreated,
        Func<TResult> onLastCalculated,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Created => onCreated(),
            _ when this == LastCalculated => onLastCalculated(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreated, Action onLastCalculated, Action<string> otherwise)
    {
        if (this == Created) onCreated();
        else if (this == LastCalculated) onLastCalculated();
        else otherwise(Value);
    }
}
