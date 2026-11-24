using System;
using System.Text.Json.Serialization;
using BrowserUse.Core.Enum;

namespace BrowserUse.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Contentdisposition>))]
public sealed record Contentdisposition : OpenStringEnum<Contentdisposition>
{
    private Contentdisposition(string value) : base(value)
    {
    }

    public static readonly Contentdisposition Attachment = new("attachment");

    public TResult Match<TResult>(Func<TResult> onAttachment, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Attachment => onAttachment(),
            _ => otherwise(Value)
        };

    public void Match(Action onAttachment, Action<string> otherwise)
    {
        if (this == Attachment) onAttachment();
        else otherwise(Value);
    }
}
