using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget80>))]
public sealed record XAmzTarget80 : OpenStringEnum<XAmzTarget80>
{
    private XAmzTarget80(string value) : base(value)
    {
    }

    public static readonly XAmzTarget80 StorageGateway20130630SetSmbGuestPassword = new(
        "StorageGateway_20130630.SetSMBGuestPassword");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630SetSmbGuestPassword,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630SetSmbGuestPassword => onStorageGateway20130630SetSmbGuestPassword(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630SetSmbGuestPassword, Action<string> otherwise)
    {
        if (this == StorageGateway20130630SetSmbGuestPassword) onStorageGateway20130630SetSmbGuestPassword();
        else otherwise(Value);
    }
}
