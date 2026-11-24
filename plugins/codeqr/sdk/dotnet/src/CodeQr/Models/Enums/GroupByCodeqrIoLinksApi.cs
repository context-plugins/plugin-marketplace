using System;
using System.Text.Json.Serialization;
using CodeQr.Core.Enum;

namespace CodeQr.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<GroupByCodeqrIoLinksApi>))]
public sealed record GroupByCodeqrIoLinksApi : OpenStringEnum<GroupByCodeqrIoLinksApi>
{
    private GroupByCodeqrIoLinksApi(string value) : base(value)
    {
    }

    public static readonly GroupByCodeqrIoLinksApi Domain = new("domain");

    public TResult Match<TResult>(Func<TResult> onDomain, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Domain => onDomain(),
            _ => otherwise(Value)
        };

    public void Match(Action onDomain, Action<string> otherwise)
    {
        if (this == Domain) onDomain();
        else otherwise(Value);
    }
}
