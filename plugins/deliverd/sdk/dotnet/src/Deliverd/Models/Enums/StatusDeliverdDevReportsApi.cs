using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusDeliverdDevReportsApi>))]
public sealed record StatusDeliverdDevReportsApi : OpenStringEnum<StatusDeliverdDevReportsApi>
{
    private StatusDeliverdDevReportsApi(string value) : base(value)
    {
    }

    public static readonly StatusDeliverdDevReportsApi Active = new("active");

    public static readonly StatusDeliverdDevReportsApi Archived = new("archived");

    public static readonly StatusDeliverdDevReportsApi Blocked = new("blocked");

    public TResult Match<TResult>(Func<TResult> onActive,
        Func<TResult> onArchived,
        Func<TResult> onBlocked,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Archived => onArchived(),
            _ when this == Blocked => onBlocked(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onArchived, Action onBlocked, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Archived) onArchived();
        else if (this == Blocked) onBlocked();
        else otherwise(Value);
    }
}
