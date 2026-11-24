using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The strategy used to conduct the migration. CREATE_NEW - Creates a new Amazon Lex V2 bot and migrates the Amazon Lex V1 bot to the new bot. UPDATE_EXISTING - Overwrites the existing Amazon Lex V2 bot metadata and the locale being migrated. It doesn't change any other locales in the Amazon Lex V2 bot. If the locale doesn't exist, a new locale is created in the Amazon Lex V2 bot.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<MigrationStrategy>))]
public sealed record MigrationStrategy : OpenStringEnum<MigrationStrategy>
{
    private MigrationStrategy(string value) : base(value)
    {
    }

    public static readonly MigrationStrategy CreateNew = new("CREATE_NEW");

    public static readonly MigrationStrategy UpdateExisting = new("UPDATE_EXISTING");

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
