using System;
using System.Text.Json.Serialization;
using Jid.Core.Enum;

namespace Jid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TypeJidQualifyApi>))]
public sealed record TypeJidQualifyApi : OpenStringEnum<TypeJidQualifyApi>
{
    private TypeJidQualifyApi(string value) : base(value)
    {
    }

    public static readonly TypeJidQualifyApi Tor = new("tor");

    public static readonly TypeJidQualifyApi HostingOrVpn = new("hosting_or_vpn");

    public static readonly TypeJidQualifyApi Other = new("other");

    public static readonly TypeJidQualifyApi Unknown = new("unknown");

    public TResult Match<TResult>(Func<TResult> onTor,
        Func<TResult> onHostingOrVpn,
        Func<TResult> onOther,
        Func<TResult> onUnknown,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Tor => onTor(),
            _ when this == HostingOrVpn => onHostingOrVpn(),
            _ when this == Other => onOther(),
            _ when this == Unknown => onUnknown(),
            _ => otherwise(Value)
        };

    public void Match(Action onTor, Action onHostingOrVpn, Action onOther, Action onUnknown, Action<string> otherwise)
    {
        if (this == Tor) onTor();
        else if (this == HostingOrVpn) onHostingOrVpn();
        else if (this == Other) onOther();
        else if (this == Unknown) onUnknown();
        else otherwise(Value);
    }
}
