using System;
using System.Text.Json.Serialization;
using FacebookBusinessManager.Core.Enum;

namespace FacebookBusinessManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Filter>))]
public sealed record Filter : OpenStringEnum<Filter>
{
    private Filter(string value) : base(value)
    {
    }

    public static readonly Filter Stream = new("stream");

    public static readonly Filter Toplevel = new("toplevel");

    public TResult Match<TResult>(Func<TResult> onStream, Func<TResult> onToplevel, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Stream => onStream(),
            _ when this == Toplevel => onToplevel(),
            _ => otherwise(Value)
        };

    public void Match(Action onStream, Action onToplevel, Action<string> otherwise)
    {
        if (this == Stream) onStream();
        else if (this == Toplevel) onToplevel();
        else otherwise(Value);
    }
}
