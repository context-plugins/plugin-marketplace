using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget79>))]
public sealed record XAmzTarget79 : OpenStringEnum<XAmzTarget79>
{
    private XAmzTarget79(string value) : base(value)
    {
    }

    public static readonly XAmzTarget79 StorageGateway20130630SetLocalConsolePassword = new(
        "StorageGateway_20130630.SetLocalConsolePassword");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630SetLocalConsolePassword,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                StorageGateway20130630SetLocalConsolePassword => onStorageGateway20130630SetLocalConsolePassword(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630SetLocalConsolePassword, Action<string> otherwise)
    {
        if (this == StorageGateway20130630SetLocalConsolePassword) onStorageGateway20130630SetLocalConsolePassword();
        else otherwise(Value);
    }
}
