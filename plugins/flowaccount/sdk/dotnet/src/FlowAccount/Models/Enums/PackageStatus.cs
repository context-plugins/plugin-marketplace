using System;
using System.Text.Json.Serialization;
using FlowAccount.Core.Enum;

namespace FlowAccount.Models.Enums;

/// <summary>
/// 10 = Pending
/// 30 = Approve
/// 50 = Suspend
/// 70 = Terminated
/// 90 = Delete
/// </summary>
[JsonConverter(typeof(IntEnumConverter<PackageStatus>))]
public sealed record PackageStatus : OpenIntEnum<PackageStatus>
{
    private PackageStatus(long value) : base(value)
    {
    }

    public static readonly PackageStatus Value10 = new(10L);

    public static readonly PackageStatus Value30 = new(30L);

    public static readonly PackageStatus Value50 = new(50L);

    public static readonly PackageStatus Value70 = new(70L);

    public static readonly PackageStatus Value90 = new(90L);

    public TResult Match<TResult>(Func<TResult> onValue10,
        Func<TResult> onValue30,
        Func<TResult> onValue50,
        Func<TResult> onValue70,
        Func<TResult> onValue90,
        Func<long, TResult> otherwise) =>
        this switch
        {
            _ when this == Value10 => onValue10(),
            _ when this == Value30 => onValue30(),
            _ when this == Value50 => onValue50(),
            _ when this == Value70 => onValue70(),
            _ when this == Value90 => onValue90(),
            _ => otherwise(Value)
        };

    public void Match(Action onValue10,
        Action onValue30,
        Action onValue50,
        Action onValue70,
        Action onValue90,
        Action<long> otherwise)
    {
        if (this == Value10) onValue10();
        else if (this == Value30) onValue30();
        else if (this == Value50) onValue50();
        else if (this == Value70) onValue70();
        else if (this == Value90) onValue90();
        else otherwise(Value);
    }
}
