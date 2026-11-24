using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

/// <summary>
/// The type of PayID identifier.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type1PlatformPayeesApi>))]
public sealed record Type1PlatformPayeesApi : OpenStringEnum<Type1PlatformPayeesApi>
{
    private Type1PlatformPayeesApi(string value) : base(value)
    {
    }

    public static readonly Type1PlatformPayeesApi Email = new("EMAIL");

    public static readonly Type1PlatformPayeesApi Phone = new("PHONE");

    public static readonly Type1PlatformPayeesApi Abn = new("ABN");

    public static readonly Type1PlatformPayeesApi OrgId = new("ORG_ID");

    public TResult Match<TResult>(Func<TResult> onEmail,
        Func<TResult> onPhone,
        Func<TResult> onAbn,
        Func<TResult> onOrgId,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Email => onEmail(),
            _ when this == Phone => onPhone(),
            _ when this == Abn => onAbn(),
            _ when this == OrgId => onOrgId(),
            _ => otherwise(Value)
        };

    public void Match(Action onEmail, Action onPhone, Action onAbn, Action onOrgId, Action<string> otherwise)
    {
        if (this == Email) onEmail();
        else if (this == Phone) onPhone();
        else if (this == Abn) onAbn();
        else if (this == OrgId) onOrgId();
        else otherwise(Value);
    }
}
