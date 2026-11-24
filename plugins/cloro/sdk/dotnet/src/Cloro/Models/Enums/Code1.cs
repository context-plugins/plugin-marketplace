using System;
using System.Text.Json.Serialization;
using Cloro.Core.Enum;

namespace Cloro.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Code1>))]
public sealed record Code1 : OpenStringEnum<Code1>
{
    private Code1(string value) : base(value)
    {
    }

    public static readonly Code1 ResourceAlreadyExists = new("RESOURCE_ALREADY_EXISTS");

    public TResult Match<TResult>(Func<TResult> onResourceAlreadyExists, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ResourceAlreadyExists => onResourceAlreadyExists(),
            _ => otherwise(Value)
        };

    public void Match(Action onResourceAlreadyExists, Action<string> otherwise)
    {
        if (this == ResourceAlreadyExists) onResourceAlreadyExists();
        else otherwise(Value);
    }
}
