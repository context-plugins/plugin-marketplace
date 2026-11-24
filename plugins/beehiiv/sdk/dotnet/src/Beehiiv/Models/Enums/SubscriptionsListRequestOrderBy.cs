using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SubscriptionsListRequestOrderBy>))]
public sealed record SubscriptionsListRequestOrderBy : OpenStringEnum<SubscriptionsListRequestOrderBy>
{
    private SubscriptionsListRequestOrderBy(string value) : base(value)
    {
    }

    public static readonly SubscriptionsListRequestOrderBy Created = new("created");

    public TResult Match<TResult>(Func<TResult> onCreated, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Created => onCreated(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreated, Action<string> otherwise)
    {
        if (this == Created) onCreated();
        else otherwise(Value);
    }
}
