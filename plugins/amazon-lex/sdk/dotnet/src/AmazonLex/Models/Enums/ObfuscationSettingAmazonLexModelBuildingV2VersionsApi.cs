using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// Determines whether a slot is obfuscated in conversation logs and stored utterances. When you obfuscate a slot, the value is replaced by the slot name in curly braces ({}). For example, if the slot name is "full_name", obfuscated values are replaced with "{full_name}". For more information, see Slot Obfuscation .
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ObfuscationSettingAmazonLexModelBuildingV2VersionsApi>))]
public sealed record ObfuscationSettingAmazonLexModelBuildingV2VersionsApi : OpenStringEnum<ObfuscationSettingAmazonLexModelBuildingV2VersionsApi>
{
    private ObfuscationSettingAmazonLexModelBuildingV2VersionsApi(string value) : base(value)
    {
    }

    public static readonly ObfuscationSettingAmazonLexModelBuildingV2VersionsApi None = new("NONE");

    public static readonly ObfuscationSettingAmazonLexModelBuildingV2VersionsApi DefaultObfuscation = new(
        "DEFAULT_OBFUSCATION");

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
