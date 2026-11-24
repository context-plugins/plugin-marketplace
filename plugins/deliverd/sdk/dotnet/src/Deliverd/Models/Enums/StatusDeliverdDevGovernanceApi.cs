using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusDeliverdDevGovernanceApi>))]
public sealed record StatusDeliverdDevGovernanceApi : OpenStringEnum<StatusDeliverdDevGovernanceApi>
{
    private StatusDeliverdDevGovernanceApi(string value) : base(value)
    {
    }

    public static readonly StatusDeliverdDevGovernanceApi Open = new("open");

    public static readonly StatusDeliverdDevGovernanceApi Resolved = new("resolved");

    public TResult Match<TResult>(Func<TResult> onOpen, Func<TResult> onResolved, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Open => onOpen(),
            _ when this == Resolved => onResolved(),
            _ => otherwise(Value)
        };

    public void Match(Action onOpen, Action onResolved, Action<string> otherwise)
    {
        if (this == Open) onOpen();
        else if (this == Resolved) onResolved();
        else otherwise(Value);
    }
}
