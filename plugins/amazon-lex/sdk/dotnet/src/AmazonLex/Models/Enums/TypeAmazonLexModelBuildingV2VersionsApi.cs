using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// How the intent should be fulfilled, either by running a Lambda function or by returning the slot data to the client application.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeAmazonLexModelBuildingV2VersionsApi>))]
public sealed record TypeAmazonLexModelBuildingV2VersionsApi : OpenStringEnum<TypeAmazonLexModelBuildingV2VersionsApi>
{
    private TypeAmazonLexModelBuildingV2VersionsApi(string value) : base(value)
    {
    }

    public static readonly TypeAmazonLexModelBuildingV2VersionsApi ReturnIntent = new("ReturnIntent");

    public static readonly TypeAmazonLexModelBuildingV2VersionsApi CodeHook = new("CodeHook");

    public TResult Match<TResult>(Func<TResult> onReturnIntent,
        Func<TResult> onCodeHook,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ReturnIntent => onReturnIntent(),
            _ when this == CodeHook => onCodeHook(),
            _ => otherwise(Value)
        };

    public void Match(Action onReturnIntent, Action onCodeHook, Action<string> otherwise)
    {
        if (this == ReturnIntent) onReturnIntent();
        else if (this == CodeHook) onCodeHook();
        else otherwise(Value);
    }
}
