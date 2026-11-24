using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Source>))]
public sealed record Source : OpenStringEnum<Source>
{
    private Source(string value) : base(value)
    {
    }

    public static readonly Source Code = new("code");

    public static readonly Source Admin = new("admin");

    public TResult Match<TResult>(Func<TResult> onCode, Func<TResult> onAdmin, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Code => onCode(),
            _ when this == Admin => onAdmin(),
            _ => otherwise(Value)
        };

    public void Match(Action onCode, Action onAdmin, Action<string> otherwise)
    {
        if (this == Code) onCode();
        else if (this == Admin) onAdmin();
        else otherwise(Value);
    }
}
