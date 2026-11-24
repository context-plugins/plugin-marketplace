using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget3>))]
public sealed record XAmzTarget3 : OpenStringEnum<XAmzTarget3>
{
    private XAmzTarget3(string value) : base(value)
    {
    }

    public static readonly XAmzTarget3 TranscribeListCallAnalyticsCategories = new(
        "Transcribe.ListCallAnalyticsCategories");

    public TResult Match<TResult>(Func<TResult> onTranscribeListCallAnalyticsCategories,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TranscribeListCallAnalyticsCategories => onTranscribeListCallAnalyticsCategories(),
            _ => otherwise(Value)
        };

    public void Match(Action onTranscribeListCallAnalyticsCategories, Action<string> otherwise)
    {
        if (this == TranscribeListCallAnalyticsCategories) onTranscribeListCallAnalyticsCategories();
        else otherwise(Value);
    }
}
