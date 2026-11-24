using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The layout of the articles from the feed.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RssBlockLayout>))]
public sealed record RssBlockLayout : OpenStringEnum<RssBlockLayout>
{
    private RssBlockLayout(string value) : base(value)
    {
    }

    public static readonly RssBlockLayout _1Col = new("1-col");

    public static readonly RssBlockLayout _2Col = new("2-col");

    public static readonly RssBlockLayout _3Col = new("3-col");

    public static readonly RssBlockLayout _4Col = new("4-col");

    public TResult Match<TResult>(Func<TResult> on_1Col,
        Func<TResult> on_2Col,
        Func<TResult> on_3Col,
        Func<TResult> on_4Col,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == _1Col => on_1Col(),
            _ when this == _2Col => on_2Col(),
            _ when this == _3Col => on_3Col(),
            _ when this == _4Col => on_4Col(),
            _ => otherwise(Value)
        };

    public void Match(Action on_1Col, Action on_2Col, Action on_3Col, Action on_4Col, Action<string> otherwise)
    {
        if (this == _1Col) on_1Col();
        else if (this == _2Col) on_2Col();
        else if (this == _3Col) on_3Col();
        else if (this == _4Col) on_4Col();
        else otherwise(Value);
    }
}
