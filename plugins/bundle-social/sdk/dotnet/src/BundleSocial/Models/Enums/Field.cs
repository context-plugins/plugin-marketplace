using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Field>))]
public sealed record Field : OpenStringEnum<Field>
{
    private Field(string value) : base(value)
    {
    }

    public static readonly Field Text = new("TEXT");

    public static readonly Field Payload = new("PAYLOAD");

    public static readonly Field Platform = new("PLATFORM");

    public static readonly Field SenderId = new("SENDER_ID");

    public TResult Match<TResult>(Func<TResult> onText,
        Func<TResult> onPayload,
        Func<TResult> onPlatform,
        Func<TResult> onSenderId,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Text => onText(),
            _ when this == Payload => onPayload(),
            _ when this == Platform => onPlatform(),
            _ when this == SenderId => onSenderId(),
            _ => otherwise(Value)
        };

    public void Match(Action onText, Action onPayload, Action onPlatform, Action onSenderId, Action<string> otherwise)
    {
        if (this == Text) onText();
        else if (this == Payload) onPayload();
        else if (this == Platform) onPlatform();
        else if (this == SenderId) onSenderId();
        else otherwise(Value);
    }
}
