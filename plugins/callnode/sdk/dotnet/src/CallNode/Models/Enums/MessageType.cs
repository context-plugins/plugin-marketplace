using System;
using System.Text.Json.Serialization;
using CallNode.Core.Enum;

namespace CallNode.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<MessageType>))]
public sealed record MessageType : OpenStringEnum<MessageType>
{
    private MessageType(string value) : base(value)
    {
    }

    public static readonly MessageType Sms = new("sms");

    public static readonly MessageType Mms = new("mms");

    public TResult Match<TResult>(Func<TResult> onSms, Func<TResult> onMms, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Sms => onSms(),
            _ when this == Mms => onMms(),
            _ => otherwise(Value)
        };

    public void Match(Action onSms, Action onMms, Action<string> otherwise)
    {
        if (this == Sms) onSms();
        else if (this == Mms) onMms();
        else otherwise(Value);
    }
}
