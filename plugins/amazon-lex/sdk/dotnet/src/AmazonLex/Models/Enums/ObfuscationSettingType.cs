using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// Value that determines whether Amazon Lex obscures slot values in conversation logs. The default is to obscure the values.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ObfuscationSettingType>))]
public sealed record ObfuscationSettingType : OpenStringEnum<ObfuscationSettingType>
{
    private ObfuscationSettingType(string value) : base(value)
    {
    }

    public static readonly ObfuscationSettingType None = new("None");

    public static readonly ObfuscationSettingType DefaultObfuscation = new("DefaultObfuscation");

    public TResult Match<TResult>(Func<TResult> onNone,
        Func<TResult> onDefaultObfuscation,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == None => onNone(),
            _ when this == DefaultObfuscation => onDefaultObfuscation(),
            _ => otherwise(Value)
        };

    public void Match(Action onNone, Action onDefaultObfuscation, Action<string> otherwise)
    {
        if (this == None) onNone();
        else if (this == DefaultObfuscation) onDefaultObfuscation();
        else otherwise(Value);
    }
}
