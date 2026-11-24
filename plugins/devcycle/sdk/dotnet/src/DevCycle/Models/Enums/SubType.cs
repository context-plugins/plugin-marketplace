using System;
using System.Text.Json.Serialization;
using DevCycle.Core.Enum;

namespace DevCycle.Models.Enums;

/// <summary>
/// Sub type of this filter
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SubType>))]
public sealed record SubType : OpenStringEnum<SubType>
{
    private SubType(string value) : base(value)
    {
    }

    public static readonly SubType UserId = new("user_id");

    public static readonly SubType Email = new("email");

    public static readonly SubType Platform = new("platform");

    public static readonly SubType DeviceModel = new("deviceModel");

    public TResult Match<TResult>(Func<TResult> onUserId,
        Func<TResult> onEmail,
        Func<TResult> onPlatform,
        Func<TResult> onDeviceModel,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == UserId => onUserId(),
            _ when this == Email => onEmail(),
            _ when this == Platform => onPlatform(),
            _ when this == DeviceModel => onDeviceModel(),
            _ => otherwise(Value)
        };

    public void Match(Action onUserId,
        Action onEmail,
        Action onPlatform,
        Action onDeviceModel,
        Action<string> otherwise)
    {
        if (this == UserId) onUserId();
        else if (this == Email) onEmail();
        else if (this == Platform) onPlatform();
        else if (this == DeviceModel) onDeviceModel();
        else otherwise(Value);
    }
}
