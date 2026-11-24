using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<BucketOwnerAccess>))]
public sealed record BucketOwnerAccess : OpenStringEnum<BucketOwnerAccess>
{
    private BucketOwnerAccess(string value) : base(value)
    {
    }

    public static readonly BucketOwnerAccess None = new("NONE");

    public static readonly BucketOwnerAccess ReadOnly = new("READ_ONLY");

    public static readonly BucketOwnerAccess Full = new("FULL");

    public TResult Match<TResult>(Func<TResult> onNone,
        Func<TResult> onReadOnly,
        Func<TResult> onFull,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == None => onNone(),
            _ when this == ReadOnly => onReadOnly(),
            _ when this == Full => onFull(),
            _ => otherwise(Value)
        };

    public void Match(Action onNone, Action onReadOnly, Action onFull, Action<string> otherwise)
    {
        if (this == None) onNone();
        else if (this == ReadOnly) onReadOnly();
        else if (this == Full) onFull();
        else otherwise(Value);
    }
}
