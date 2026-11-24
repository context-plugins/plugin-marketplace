using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Enum;

namespace CompSniper.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Delivery>))]
public sealed record Delivery : OpenStringEnum<Delivery>
{
    private Delivery(string value) : base(value)
    {
    }

    public static readonly Delivery Inline = new("inline");

    public static readonly Delivery Email = new("email");

    public static readonly Delivery Download = new("download");

    public TResult Match<TResult>(Func<TResult> onInline,
        Func<TResult> onEmail,
        Func<TResult> onDownload,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Inline => onInline(),
            _ when this == Email => onEmail(),
            _ when this == Download => onDownload(),
            _ => otherwise(Value)
        };

    public void Match(Action onInline, Action onEmail, Action onDownload, Action<string> otherwise)
    {
        if (this == Inline) onInline();
        else if (this == Email) onEmail();
        else if (this == Download) onDownload();
        else otherwise(Value);
    }
}
