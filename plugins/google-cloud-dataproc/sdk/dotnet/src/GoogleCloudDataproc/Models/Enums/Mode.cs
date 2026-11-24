using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// Required. Defines the behavior of the migration execution.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Mode>))]
public sealed record Mode : OpenStringEnum<Mode>
{
    private Mode(string value) : base(value)
    {
    }

    public static readonly Mode MigrationModeUnspecified = new("MIGRATION_MODE_UNSPECIFIED");

    public static readonly Mode Backfill = new("BACKFILL");

    public TResult Match<TResult>(Func<TResult> onMigrationModeUnspecified,
        Func<TResult> onBackfill,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == MigrationModeUnspecified => onMigrationModeUnspecified(),
            _ when this == Backfill => onBackfill(),
            _ => otherwise(Value)
        };

    public void Match(Action onMigrationModeUnspecified, Action onBackfill, Action<string> otherwise)
    {
        if (this == MigrationModeUnspecified) onMigrationModeUnspecified();
        else if (this == Backfill) onBackfill();
        else otherwise(Value);
    }
}
