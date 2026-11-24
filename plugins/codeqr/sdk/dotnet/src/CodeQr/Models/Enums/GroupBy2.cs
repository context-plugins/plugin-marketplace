using System;
using System.Text.Json.Serialization;
using CodeQr.Core.Enum;

namespace CodeQr.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<GroupBy2>))]
public sealed record GroupBy2 : OpenStringEnum<GroupBy2>
{
    private GroupBy2(string value) : base(value)
    {
    }

    public static readonly GroupBy2 UserId = new("userId");

    public TResult Match<TResult>(Func<TResult> onUserId, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == UserId => onUserId(),
            _ => otherwise(Value)
        };

    public void Match(Action onUserId, Action<string> otherwise)
    {
        if (this == UserId) onUserId();
        else otherwise(Value);
    }
}
