using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Role1>))]
public sealed record Role1 : OpenStringEnum<Role1>
{
    private Role1(string value) : base(value)
    {
    }

    public static readonly Role1 RoleUnspecified = new("ROLE_UNSPECIFIED");

    public static readonly Role1 Driver = new("DRIVER");

    public TResult Match<TResult>(Func<TResult> onRoleUnspecified,
        Func<TResult> onDriver,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RoleUnspecified => onRoleUnspecified(),
            _ when this == Driver => onDriver(),
            _ => otherwise(Value)
        };

    public void Match(Action onRoleUnspecified, Action onDriver, Action<string> otherwise)
    {
        if (this == RoleUnspecified) onRoleUnspecified();
        else if (this == Driver) onDriver();
        else otherwise(Value);
    }
}
