using System;
using System.Text.Json.Serialization;
using CodeQr.Core.Enum;

namespace CodeQr.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<GroupBy1>))]
public sealed record GroupBy1 : OpenStringEnum<GroupBy1>
{
    private GroupBy1(string value) : base(value)
    {
    }

    public static readonly GroupBy1 TagId = new("tagId");

    public TResult Match<TResult>(Func<TResult> onTagId, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TagId => onTagId(),
            _ => otherwise(Value)
        };

    public void Match(Action onTagId, Action<string> otherwise)
    {
        if (this == TagId) onTagId();
        else otherwise(Value);
    }
}
