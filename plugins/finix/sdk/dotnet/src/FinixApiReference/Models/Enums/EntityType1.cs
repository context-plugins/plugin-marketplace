using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The type of entity that needs to be updated.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<EntityType1>))]
public sealed record EntityType1 : OpenStringEnum<EntityType1>
{
    private EntityType1(string value) : base(value)
    {
    }

    public static readonly EntityType1 Identity = new("IDENTITY");

    public TResult Match<TResult>(Func<TResult> onIdentity, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Identity => onIdentity(),
            _ => otherwise(Value)
        };

    public void Match(Action onIdentity, Action<string> otherwise)
    {
        if (this == Identity) onIdentity();
        else otherwise(Value);
    }
}
