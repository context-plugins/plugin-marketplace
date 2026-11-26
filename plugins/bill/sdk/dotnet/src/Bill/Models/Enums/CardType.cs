using System;
using System.Text.Json.Serialization;
using Bill.Core.Enum;

namespace Bill.Models.Enums;

/// <summary>
/// CardType.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CardType>))]
public sealed record CardType : OpenStringEnum<CardType>
{
    private CardType(string value) : base(value)
    {
    }

    public static readonly CardType Physical = new("PHYSICAL");

    public static readonly CardType VirtualMember = new("VIRTUAL_MEMBER");

    public static readonly CardType VirtualVendor = new("VIRTUAL_VENDOR");

    public static readonly CardType Virtual = new("VIRTUAL");

    public TResult Match<TResult>(Func<TResult> onPhysical,
        Func<TResult> onVirtualMember,
        Func<TResult> onVirtualVendor,
        Func<TResult> onVirtual,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Physical => onPhysical(),
            _ when this == VirtualMember => onVirtualMember(),
            _ when this == VirtualVendor => onVirtualVendor(),
            _ when this == Virtual => onVirtual(),
            _ => otherwise(Value)
        };

    public void Match(Action onPhysical,
        Action onVirtualMember,
        Action onVirtualVendor,
        Action onVirtual,
        Action<string> otherwise)
    {
        if (this == Physical) onPhysical();
        else if (this == VirtualMember) onVirtualMember();
        else if (this == VirtualVendor) onVirtualVendor();
        else if (this == Virtual) onVirtual();
        else otherwise(Value);
    }
}
