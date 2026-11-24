using System;
using System.Text.Json.Serialization;
using Fellow.Core.Enum;

namespace Fellow.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Type1>))]
public sealed record Type1 : OpenStringEnum<Type1>
{
    private Type1(string value) : base(value)
    {
    }

    public static readonly Type1 BasicAuth = new("basic_auth");

    public TResult Match<TResult>(Func<TResult> onBasicAuth, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == BasicAuth => onBasicAuth(),
            _ => otherwise(Value)
        };

    public void Match(Action onBasicAuth, Action<string> otherwise)
    {
        if (this == BasicAuth) onBasicAuth();
        else otherwise(Value);
    }
}
