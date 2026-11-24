using System;
using System.Text.Json.Serialization;
using Fellow.Core.Enum;

namespace Fellow.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum BearerToken = new("bearer_token");

    public TResult Match<TResult>(Func<TResult> onBearerToken, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == BearerToken => onBearerToken(),
            _ => otherwise(Value)
        };

    public void Match(Action onBearerToken, Action<string> otherwise)
    {
        if (this == BearerToken) onBearerToken();
        else otherwise(Value);
    }
}
