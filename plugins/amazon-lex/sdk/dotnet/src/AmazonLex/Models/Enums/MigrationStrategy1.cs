using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The strategy used to conduct the migration.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<MigrationStrategy1>))]
public sealed record MigrationStrategy1 : OpenStringEnum<MigrationStrategy1>
{
    private MigrationStrategy1(string value) : base(value)
    {
    }

    public static readonly MigrationStrategy1 CreateNew = new("CREATE_NEW");

    public static readonly MigrationStrategy1 UpdateExisting = new("UPDATE_EXISTING");

    public TResult Match<TResult>(Func<TResult> onCreateNew,
        Func<TResult> onUpdateExisting,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CreateNew => onCreateNew(),
            _ when this == UpdateExisting => onUpdateExisting(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreateNew, Action onUpdateExisting, Action<string> otherwise)
    {
        if (this == CreateNew) onCreateNew();
        else if (this == UpdateExisting) onUpdateExisting();
        else otherwise(Value);
    }
}
