using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SegmentsExpandItems>))]
public sealed record SegmentsExpandItems : OpenStringEnum<SegmentsExpandItems>
{
    private SegmentsExpandItems(string value) : base(value)
    {
    }

    public static readonly SegmentsExpandItems Stats = new("stats");

    public TResult Match<TResult>(Func<TResult> onStats, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Stats => onStats(),
            _ => otherwise(Value)
        };

    public void Match(Action onStats, Action<string> otherwise)
    {
        if (this == Stats) onStats();
        else otherwise(Value);
    }
}
