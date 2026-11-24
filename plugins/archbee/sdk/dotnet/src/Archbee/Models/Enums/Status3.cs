using System;
using System.Text.Json.Serialization;
using Archbee.Core.Enum;

namespace Archbee.Models.Enums;

/// <summary>
/// Response status.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status3>))]
public sealed record Status3 : OpenStringEnum<Status3>
{
    private Status3(string value) : base(value)
    {
    }

    public static readonly Status3 Ok = new("OK");

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
