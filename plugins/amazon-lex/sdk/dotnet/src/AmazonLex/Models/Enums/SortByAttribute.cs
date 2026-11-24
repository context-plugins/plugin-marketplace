using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The field to sort the list of migrations by. You can sort by the Amazon Lex V1 bot name or the date and time that the migration was started.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SortByAttribute>))]
public sealed record SortByAttribute : OpenStringEnum<SortByAttribute>
{
    private SortByAttribute(string value) : base(value)
    {
    }

    public static readonly SortByAttribute V1BotName = new("V1_BOT_NAME");

    public static readonly SortByAttribute MigrationDateTime = new("MIGRATION_DATE_TIME");

    public TResult Match<TResult>(Func<TResult> onV1BotName,
        Func<TResult> onMigrationDateTime,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == V1BotName => onV1BotName(),
            _ when this == MigrationDateTime => onMigrationDateTime(),
            _ => otherwise(Value)
        };

    public void Match(Action onV1BotName, Action onMigrationDateTime, Action<string> otherwise)
    {
        if (this == V1BotName) onV1BotName();
        else if (this == MigrationDateTime) onMigrationDateTime();
        else otherwise(Value);
    }
}
