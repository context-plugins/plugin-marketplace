using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// Enum representing the action type for 3D Secure (3DS) transactions.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ThreeDsActionType>))]
public sealed record ThreeDsActionType : OpenStringEnum<ThreeDsActionType>
{
    private ThreeDsActionType(string value) : base(value)
    {
    }

    public static readonly ThreeDsActionType Accept = new("ACCEPT");

    public static readonly ThreeDsActionType Reject = new("REJECT");

    public TResult Match<TResult>(Func<TResult> onAccept, Func<TResult> onReject, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Accept => onAccept(),
            _ when this == Reject => onReject(),
            _ => otherwise(Value)
        };

    public void Match(Action onAccept, Action onReject, Action<string> otherwise)
    {
        if (this == Accept) onAccept();
        else if (this == Reject) onReject();
        else otherwise(Value);
    }
}
