using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XDryRun>))]
public sealed record XDryRun : OpenStringEnum<XDryRun>
{
    private XDryRun(string value) : base(value)
    {
    }

    public static readonly XDryRun True = new("true");

    public TResult Match<TResult>(Func<TResult> onTrue, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == True => onTrue(),
            _ => otherwise(Value)
        };

    public void Match(Action onTrue, Action<string> otherwise)
    {
        if (this == True) onTrue();
        else otherwise(Value);
    }
}
