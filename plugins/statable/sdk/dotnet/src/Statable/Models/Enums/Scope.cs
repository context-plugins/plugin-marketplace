using System;
using System.Text.Json.Serialization;
using Statable.Core.Enum;

namespace Statable.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Scope>))]
public sealed record Scope : OpenStringEnum<Scope>
{
    private Scope(string value) : base(value)
    {
    }

    public static readonly Scope Read = new("read");

    public static readonly Scope SitesWrite = new("sites:write");

    public static readonly Scope KeysManage = new("keys:manage");

    public static readonly Scope BillingWrite = new("billing:write");

    public TResult Match<TResult>(Func<TResult> onRead,
        Func<TResult> onSitesWrite,
        Func<TResult> onKeysManage,
        Func<TResult> onBillingWrite,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Read => onRead(),
            _ when this == SitesWrite => onSitesWrite(),
            _ when this == KeysManage => onKeysManage(),
            _ when this == BillingWrite => onBillingWrite(),
            _ => otherwise(Value)
        };

    public void Match(Action onRead,
        Action onSitesWrite,
        Action onKeysManage,
        Action onBillingWrite,
        Action<string> otherwise)
    {
        if (this == Read) onRead();
        else if (this == SitesWrite) onSitesWrite();
        else if (this == KeysManage) onKeysManage();
        else if (this == BillingWrite) onBillingWrite();
        else otherwise(Value);
    }
}
