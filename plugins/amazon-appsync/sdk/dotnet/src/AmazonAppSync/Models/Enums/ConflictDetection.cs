using System;
using System.Text.Json.Serialization;
using AmazonAppSync.Core.Enum;

namespace AmazonAppSync.Models.Enums;

/// <summary>
/// The Conflict Detection strategy to use. VERSION: Detect conflicts based on object versions for this resolver. NONE: Do not detect conflicts when invoking this resolver.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ConflictDetection>))]
public sealed record ConflictDetection : OpenStringEnum<ConflictDetection>
{
    private ConflictDetection(string value) : base(value)
    {
    }

    public static readonly ConflictDetection Version = new("VERSION");

    public static readonly ConflictDetection None = new("NONE");

    public TResult Match<TResult>(Func<TResult> onVersion, Func<TResult> onNone, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Version => onVersion(),
            _ when this == None => onNone(),
            _ => otherwise(Value)
        };

    public void Match(Action onVersion, Action onNone, Action<string> otherwise)
    {
        if (this == Version) onVersion();
        else if (this == None) onNone();
        else otherwise(Value);
    }
}
