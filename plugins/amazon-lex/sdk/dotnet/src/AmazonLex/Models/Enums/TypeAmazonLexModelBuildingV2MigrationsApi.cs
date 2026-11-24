using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The type of alert. There are two kinds of alerts: ERROR - There was an issue with the migration that can't be resolved. The migration stops. WARN - There was an issue with the migration that requires manual changes to the new Amazon Lex V2 bot. The migration continues.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeAmazonLexModelBuildingV2MigrationsApi>))]
public sealed record TypeAmazonLexModelBuildingV2MigrationsApi : OpenStringEnum<TypeAmazonLexModelBuildingV2MigrationsApi>
{
    private TypeAmazonLexModelBuildingV2MigrationsApi(string value) : base(value)
    {
    }

    public static readonly TypeAmazonLexModelBuildingV2MigrationsApi Error = new("ERROR");

    public static readonly TypeAmazonLexModelBuildingV2MigrationsApi Warn = new("WARN");

    public TResult Match<TResult>(Func<TResult> onError, Func<TResult> onWarn, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Error => onError(),
            _ when this == Warn => onWarn(),
            _ => otherwise(Value)
        };

    public void Match(Action onError, Action onWarn, Action<string> otherwise)
    {
        if (this == Error) onError();
        else if (this == Warn) onWarn();
        else otherwise(Value);
    }
}
