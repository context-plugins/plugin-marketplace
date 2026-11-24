using System;
using System.Text.Json.Serialization;
using DidLogic.Core.Enum;

namespace DidLogic.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Service>))]
public sealed record Service : OpenStringEnum<Service>
{
    private Service(string value) : base(value)
    {
    }

    public static readonly Service Sms = new("sms");

    public TResult Match<TResult>(Func<TResult> onSms, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Sms => onSms(),
            _ => otherwise(Value)
        };

    public void Match(Action onSms, Action<string> otherwise)
    {
        if (this == Sms) onSms();
        else otherwise(Value);
    }
}
