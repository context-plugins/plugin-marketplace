using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Retention>))]
public sealed record Retention : OpenStringEnum<Retention>
{
    private Retention(string value) : base(value)
    {
    }

    public static readonly Retention DeletionRetentionUnspecified = new("DELETION_RETENTION_UNSPECIFIED");

    public static readonly Retention Minimum = new("MINIMUM");

    public static readonly Retention NoRetention = new("NO_RETENTION");

    public TResult Match<TResult>(Func<TResult> onDeletionRetentionUnspecified,
        Func<TResult> onMinimum,
        Func<TResult> onNoRetention,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DeletionRetentionUnspecified => onDeletionRetentionUnspecified(),
            _ when this == Minimum => onMinimum(),
            _ when this == NoRetention => onNoRetention(),
            _ => otherwise(Value)
        };

    public void Match(Action onDeletionRetentionUnspecified,
        Action onMinimum,
        Action onNoRetention,
        Action<string> otherwise)
    {
        if (this == DeletionRetentionUnspecified) onDeletionRetentionUnspecified();
        else if (this == Minimum) onMinimum();
        else if (this == NoRetention) onNoRetention();
        else otherwise(Value);
    }
}
