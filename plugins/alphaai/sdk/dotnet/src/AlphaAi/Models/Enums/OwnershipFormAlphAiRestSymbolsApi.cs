using System;
using System.Text.Json.Serialization;
using AlphaAi.Core.Enum;

namespace AlphaAi.Models.Enums;

/// <summary>
/// Direct or indirect holding pool.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<OwnershipFormAlphAiRestSymbolsApi>))]
public sealed record OwnershipFormAlphAiRestSymbolsApi : OpenStringEnum<OwnershipFormAlphAiRestSymbolsApi>
{
    private OwnershipFormAlphAiRestSymbolsApi(string value) : base(value)
    {
    }

    public static readonly OwnershipFormAlphAiRestSymbolsApi D = new("D");

    public static readonly OwnershipFormAlphAiRestSymbolsApi I = new("I");

    public TResult Match<TResult>(Func<TResult> onD, Func<TResult> onI, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == D => onD(),
            _ when this == I => onI(),
            _ => otherwise(Value)
        };

    public void Match(Action onD, Action onI, Action<string> otherwise)
    {
        if (this == D) onD();
        else if (this == I) onI();
        else otherwise(Value);
    }
}
