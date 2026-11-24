using System;
using System.Text.Json.Serialization;
using Jid.Core.Enum;

namespace Jid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Canonicalization>))]
public sealed record Canonicalization : OpenStringEnum<Canonicalization>
{
    private Canonicalization(string value) : base(value)
    {
    }

    public static readonly Canonicalization SortedKeysJson = new("sorted-keys-json");

    public TResult Match<TResult>(Func<TResult> onSortedKeysJson, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SortedKeysJson => onSortedKeysJson(),
            _ => otherwise(Value)
        };

    public void Match(Action onSortedKeysJson, Action<string> otherwise)
    {
        if (this == SortedKeysJson) onSortedKeysJson();
        else otherwise(Value);
    }
}
