using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// TransactionType.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TransactionType>))]
public sealed record TransactionType : OpenStringEnum<TransactionType>
{
    private TransactionType(string value) : base(value)
    {
    }

    public static readonly TransactionType Clear = new("CLEAR");

    public static readonly TransactionType Decline = new("DECLINE");

    public static readonly TransactionType Authorization = new("AUTHORIZATION");

    public TResult Match<TResult>(Func<TResult> onClear,
        Func<TResult> onDecline,
        Func<TResult> onAuthorization,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Clear => onClear(),
            _ when this == Decline => onDecline(),
            _ when this == Authorization => onAuthorization(),
            _ => otherwise(Value)
        };

    public void Match(Action onClear, Action onDecline, Action onAuthorization, Action<string> otherwise)
    {
        if (this == Clear) onClear();
        else if (this == Decline) onDecline();
        else if (this == Authorization) onAuthorization();
        else otherwise(Value);
    }
}
