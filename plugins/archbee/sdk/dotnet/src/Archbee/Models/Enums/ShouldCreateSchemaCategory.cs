using System;
using System.Text.Json.Serialization;
using Archbee.Core.Enum;

namespace Archbee.Models.Enums;

/// <summary>
/// OPTIONAL. You can create models category to display all your models.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ShouldCreateSchemaCategory>))]
public sealed record ShouldCreateSchemaCategory : OpenStringEnum<ShouldCreateSchemaCategory>
{
    private ShouldCreateSchemaCategory(string value) : base(value)
    {
    }

    public static readonly ShouldCreateSchemaCategory True = new("true");

    public static readonly ShouldCreateSchemaCategory False = new("false");

    public TResult Match<TResult>(Func<TResult> onTrue, Func<TResult> onFalse, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == True => onTrue(),
            _ when this == False => onFalse(),
            _ => otherwise(Value)
        };

    public void Match(Action onTrue, Action onFalse, Action<string> otherwise)
    {
        if (this == True) onTrue();
        else if (this == False) onFalse();
        else otherwise(Value);
    }
}
