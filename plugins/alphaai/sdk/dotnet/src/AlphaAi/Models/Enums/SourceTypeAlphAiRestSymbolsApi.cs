using System;
using System.Text.Json.Serialization;
using AlphaAi.Core.Enum;

namespace AlphaAi.Models.Enums;

/// <summary>
/// <c>sec_form8k</c> for a US filer's item 2.02, <c>sec_form6k</c> for a foreign private issuer's earnings release.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SourceTypeAlphAiRestSymbolsApi>))]
public sealed record SourceTypeAlphAiRestSymbolsApi : OpenStringEnum<SourceTypeAlphAiRestSymbolsApi>
{
    private SourceTypeAlphAiRestSymbolsApi(string value) : base(value)
    {
    }

    public static readonly SourceTypeAlphAiRestSymbolsApi SecForm8K = new("sec_form8k");

    public static readonly SourceTypeAlphAiRestSymbolsApi SecForm6K = new("sec_form6k");

    public TResult Match<TResult>(Func<TResult> onSecForm8K,
        Func<TResult> onSecForm6K,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SecForm8K => onSecForm8K(),
            _ when this == SecForm6K => onSecForm6K(),
            _ => otherwise(Value)
        };

    public void Match(Action onSecForm8K, Action onSecForm6K, Action<string> otherwise)
    {
        if (this == SecForm8K) onSecForm8K();
        else if (this == SecForm6K) onSecForm6K();
        else otherwise(Value);
    }
}
