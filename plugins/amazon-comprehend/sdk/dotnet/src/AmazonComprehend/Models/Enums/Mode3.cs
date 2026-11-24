using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

/// <summary>
/// Specifies whether the output provides the locations (offsets) of PII entities or a file in which PII entities are redacted.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Mode3>))]
public sealed record Mode3 : OpenStringEnum<Mode3>
{
    private Mode3(string value) : base(value)
    {
    }

    public static readonly Mode3 OnlyRedaction = new("ONLY_REDACTION");

    public static readonly Mode3 OnlyOffsets = new("ONLY_OFFSETS");

    public TResult Match<TResult>(Func<TResult> onOnlyRedaction,
        Func<TResult> onOnlyOffsets,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OnlyRedaction => onOnlyRedaction(),
            _ when this == OnlyOffsets => onOnlyOffsets(),
            _ => otherwise(Value)
        };

    public void Match(Action onOnlyRedaction, Action onOnlyOffsets, Action<string> otherwise)
    {
        if (this == OnlyRedaction) onOnlyRedaction();
        else if (this == OnlyOffsets) onOnlyOffsets();
        else otherwise(Value);
    }
}
