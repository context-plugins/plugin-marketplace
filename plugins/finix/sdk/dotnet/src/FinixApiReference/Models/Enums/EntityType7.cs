using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The entity type assigned to the underwriting note.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<EntityType7>))]
public sealed record EntityType7 : OpenStringEnum<EntityType7>
{
    private EntityType7(string value) : base(value)
    {
    }

    public static readonly EntityType7 Note = new("NOTE");

    public TResult Match<TResult>(Func<TResult> onNote, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Note => onNote(),
            _ => otherwise(Value)
        };

    public void Match(Action onNote, Action<string> otherwise)
    {
        if (this == Note) onNote();
        else otherwise(Value);
    }
}
