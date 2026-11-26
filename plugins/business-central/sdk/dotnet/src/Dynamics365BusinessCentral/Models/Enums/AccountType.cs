using System;
using System.Text.Json.Serialization;
using Dynamics365BusinessCentral.Core.Enum;

namespace Dynamics365BusinessCentral.Models.Enums;

/// <summary>
/// The account type
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AccountType>))]
public sealed record AccountType : OpenStringEnum<AccountType>
{
    private AccountType(string value) : base(value)
    {
    }

    public static readonly AccountType Posting = new("Posting");

    public static readonly AccountType Heading = new("Heading");

    public static readonly AccountType Total = new("Total");

    public static readonly AccountType BeginTotal = new("Begin-Total");

    public static readonly AccountType EndTotal = new("End-Total");

    public TResult Match<TResult>(Func<TResult> onPosting,
        Func<TResult> onHeading,
        Func<TResult> onTotal,
        Func<TResult> onBeginTotal,
        Func<TResult> onEndTotal,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Posting => onPosting(),
            _ when this == Heading => onHeading(),
            _ when this == Total => onTotal(),
            _ when this == BeginTotal => onBeginTotal(),
            _ when this == EndTotal => onEndTotal(),
            _ => otherwise(Value)
        };

    public void Match(Action onPosting,
        Action onHeading,
        Action onTotal,
        Action onBeginTotal,
        Action onEndTotal,
        Action<string> otherwise)
    {
        if (this == Posting) onPosting();
        else if (this == Heading) onHeading();
        else if (this == Total) onTotal();
        else if (this == BeginTotal) onBeginTotal();
        else if (this == EndTotal) onEndTotal();
        else otherwise(Value);
    }
}
