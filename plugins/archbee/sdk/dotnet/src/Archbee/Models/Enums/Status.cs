using System;
using System.Text.Json.Serialization;
using Archbee.Core.Enum;

namespace Archbee.Models.Enums;

/// <summary>
/// Response Status
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status>))]
public sealed record Status : OpenStringEnum<Status>
{
    private Status(string value) : base(value)
    {
    }

    public static readonly Status Ok = new("OK");

    public TResult Match<TResult>(Func<TResult> onOk, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Ok => onOk(),
            _ => otherwise(Value)
        };

    public void Match(Action onOk, Action<string> otherwise)
    {
        if (this == Ok) onOk();
        else otherwise(Value);
    }
}
