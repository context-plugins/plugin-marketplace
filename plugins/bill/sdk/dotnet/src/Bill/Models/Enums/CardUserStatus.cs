using System;
using System.Text.Json.Serialization;
using Bill.Core.Enum;

namespace Bill.Models.Enums;

/// <summary>
/// Card user status
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CardUserStatus>))]
public sealed record CardUserStatus : OpenStringEnum<CardUserStatus>
{
    private CardUserStatus(string value) : base(value)
    {
    }

    public static readonly CardUserStatus Verified = new("VERIFIED");

    public static readonly CardUserStatus Nominated = new("NOMINATED");

    public TResult Match<TResult>(Func<TResult> onVerified,
        Func<TResult> onNominated,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Verified => onVerified(),
            _ when this == Nominated => onNominated(),
            _ => otherwise(Value)
        };

    public void Match(Action onVerified, Action onNominated, Action<string> otherwise)
    {
        if (this == Verified) onVerified();
        else if (this == Nominated) onNominated();
        else otherwise(Value);
    }
}
