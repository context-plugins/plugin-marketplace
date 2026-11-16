using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// Values can be either: &lt;ul&gt;&lt;li&gt;&lt;strong&gt;PUBLIC&lt;/strong&gt; to indicate a publicly-traded company.&lt;/li&gt;&lt;li&gt;&lt;strong&gt;PRIVATE&lt;/strong&gt; for privately-held businesses.&lt;/li&gt;&lt;/ul&gt;
/// </summary>
[JsonConverter(typeof(StringEnumConverter<OwnershipType>))]
public sealed record OwnershipType : OpenStringEnum<OwnershipType>
{
    private OwnershipType(string value) : base(value)
    {
    }

    public static readonly OwnershipType Public = new("PUBLIC");

    public static readonly OwnershipType Private = new("PRIVATE");

    public TResult Match<TResult>(Func<TResult> onPublic, Func<TResult> onPrivate, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Public => onPublic(),
            _ when this == Private => onPrivate(),
            _ => otherwise(Value)
        };

    public void Match(Action onPublic, Action onPrivate, Action<string> otherwise)
    {
        if (this == Public) onPublic();
        else if (this == Private) onPrivate();
        else otherwise(Value);
    }
}
