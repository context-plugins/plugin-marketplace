using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The type of entity the <c>Fee</c> is linked to.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<LinkedType4>))]
public sealed record LinkedType4 : OpenStringEnum<LinkedType4>
{
    private LinkedType4(string value) : base(value)
    {
    }

    public static readonly LinkedType4 Transfer = new("TRANSFER");

    public static readonly LinkedType4 Authorization = new("AUTHORIZATION");

    public static readonly LinkedType4 SplitTransfer = new("SPLIT_TRANSFER");

    public TResult Match<TResult>(Func<TResult> onTransfer,
        Func<TResult> onAuthorization,
        Func<TResult> onSplitTransfer,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Transfer => onTransfer(),
            _ when this == Authorization => onAuthorization(),
            _ when this == SplitTransfer => onSplitTransfer(),
            _ => otherwise(Value)
        };

    public void Match(Action onTransfer, Action onAuthorization, Action onSplitTransfer, Action<string> otherwise)
    {
        if (this == Transfer) onTransfer();
        else if (this == Authorization) onAuthorization();
        else if (this == SplitTransfer) onSplitTransfer();
        else otherwise(Value);
    }
}
