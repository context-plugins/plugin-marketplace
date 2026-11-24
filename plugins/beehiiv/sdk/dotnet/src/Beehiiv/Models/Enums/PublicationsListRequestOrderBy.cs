using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PublicationsListRequestOrderBy>))]
public sealed record PublicationsListRequestOrderBy : OpenStringEnum<PublicationsListRequestOrderBy>
{
    private PublicationsListRequestOrderBy(string value) : base(value)
    {
    }

    public static readonly PublicationsListRequestOrderBy Created = new("created");

    public static readonly PublicationsListRequestOrderBy Name = new("name");

    public TResult Match<TResult>(Func<TResult> onCreated, Func<TResult> onName, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Created => onCreated(),
            _ when this == Name => onName(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreated, Action onName, Action<string> otherwise)
    {
        if (this == Created) onCreated();
        else if (this == Name) onName();
        else otherwise(Value);
    }
}
