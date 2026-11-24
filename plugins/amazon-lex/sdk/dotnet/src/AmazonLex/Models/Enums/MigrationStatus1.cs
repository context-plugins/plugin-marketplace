using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The status of the operation. When the status is COMPLETE the bot is available in Amazon Lex V2. There may be alerts and warnings that need to be resolved to complete the migration.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<MigrationStatus1>))]
public sealed record MigrationStatus1 : OpenStringEnum<MigrationStatus1>
{
    private MigrationStatus1(string value) : base(value)
    {
    }

    public static readonly MigrationStatus1 InProgress = new("IN_PROGRESS");

    public static readonly MigrationStatus1 Completed = new("COMPLETED");

    public static readonly MigrationStatus1 Failed = new("FAILED");

    public TResult Match<TResult>(Func<TResult> onInProgress,
        Func<TResult> onCompleted,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == InProgress => onInProgress(),
            _ when this == Completed => onCompleted(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onInProgress, Action onCompleted, Action onFailed, Action<string> otherwise)
    {
        if (this == InProgress) onInProgress();
        else if (this == Completed) onCompleted();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
