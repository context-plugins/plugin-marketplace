using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Reason1>))]
public sealed record Reason1 : OpenStringEnum<Reason1>
{
    private Reason1(string value) : base(value)
    {
    }

    public static readonly Reason1 InvalidDocument = new("INVALID_DOCUMENT");

    public TResult Match<TResult>(Func<TResult> onInvalidDocument, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == InvalidDocument => onInvalidDocument(),
            _ => otherwise(Value)
        };

    public void Match(Action onInvalidDocument, Action<string> otherwise)
    {
        if (this == InvalidDocument) onInvalidDocument();
        else otherwise(Value);
    }
}
