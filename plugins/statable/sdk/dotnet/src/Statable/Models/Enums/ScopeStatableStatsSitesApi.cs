using System;
using System.Text.Json.Serialization;
using Statable.Core.Enum;

namespace Statable.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ScopeStatableStatsSitesApi>))]
public sealed record ScopeStatableStatsSitesApi : OpenStringEnum<ScopeStatableStatsSitesApi>
{
    private ScopeStatableStatsSitesApi(string value) : base(value)
    {
    }

    public static readonly ScopeStatableStatsSitesApi Visitor = new("visitor");

    public static readonly ScopeStatableStatsSitesApi Session = new("session");

    public TResult Match<TResult>(Func<TResult> onVisitor, Func<TResult> onSession, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Visitor => onVisitor(),
            _ when this == Session => onSession(),
            _ => otherwise(Value)
        };

    public void Match(Action onVisitor, Action onSession, Action<string> otherwise)
    {
        if (this == Visitor) onVisitor();
        else if (this == Session) onSession();
        else otherwise(Value);
    }
}
