using System;
using System.Text.Json.Serialization;
using Perigon.Core.Enum;

namespace Perigon.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SearchType>))]
public sealed record SearchType : OpenStringEnum<SearchType>
{
    private SearchType(string value) : base(value)
    {
    }

    public static readonly SearchType Top = new("TOP");

    public static readonly SearchType Latest = new("LATEST");

    public static readonly SearchType Media = new("MEDIA");

    public TResult Match<TResult>(Func<TResult> onTop,
        Func<TResult> onLatest,
        Func<TResult> onMedia,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Top => onTop(),
            _ when this == Latest => onLatest(),
            _ when this == Media => onMedia(),
            _ => otherwise(Value)
        };

    public void Match(Action onTop, Action onLatest, Action onMedia, Action<string> otherwise)
    {
        if (this == Top) onTop();
        else if (this == Latest) onLatest();
        else if (this == Media) onMedia();
        else otherwise(Value);
    }
}
