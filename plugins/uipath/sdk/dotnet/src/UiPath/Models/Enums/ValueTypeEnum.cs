using System;
using System.Text.Json.Serialization;
using UiPath.Core.Enum;

namespace UiPath.Models.Enums;

/// <summary>
/// Data type of the asset value
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ValueTypeEnum>))]
public sealed record ValueTypeEnum : OpenStringEnum<ValueTypeEnum>
{
    private ValueTypeEnum(string value) : base(value)
    {
    }

    public static readonly ValueTypeEnum Text = new("Text");

    public static readonly ValueTypeEnum Integer = new("Integer");

    public static readonly ValueTypeEnum Bool = new("Bool");

    public static readonly ValueTypeEnum Credential = new("Credential");

    public static readonly ValueTypeEnum WindowsCredential = new("WindowsCredential");

    public static readonly ValueTypeEnum KeyValueList = new("KeyValueList");

    public TResult Match<TResult>(Func<TResult> onText,
        Func<TResult> onInteger,
        Func<TResult> onBool,
        Func<TResult> onCredential,
        Func<TResult> onWindowsCredential,
        Func<TResult> onKeyValueList,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Text => onText(),
            _ when this == Integer => onInteger(),
            _ when this == Bool => onBool(),
            _ when this == Credential => onCredential(),
            _ when this == WindowsCredential => onWindowsCredential(),
            _ when this == KeyValueList => onKeyValueList(),
            _ => otherwise(Value)
        };

    public void Match(Action onText,
        Action onInteger,
        Action onBool,
        Action onCredential,
        Action onWindowsCredential,
        Action onKeyValueList,
        Action<string> otherwise)
    {
        if (this == Text) onText();
        else if (this == Integer) onInteger();
        else if (this == Bool) onBool();
        else if (this == Credential) onCredential();
        else if (this == WindowsCredential) onWindowsCredential();
        else if (this == KeyValueList) onKeyValueList();
        else otherwise(Value);
    }
}
