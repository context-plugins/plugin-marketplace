using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// Specifies whether to sort the test sets by name or by the time they were last updated.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AttributeAmazonLexModelBuildingV2TestsetsApi>))]
public sealed record AttributeAmazonLexModelBuildingV2TestsetsApi : OpenStringEnum<AttributeAmazonLexModelBuildingV2TestsetsApi>
{
    private AttributeAmazonLexModelBuildingV2TestsetsApi(string value) : base(value)
    {
    }

    public static readonly AttributeAmazonLexModelBuildingV2TestsetsApi TestSetName = new("TestSetName");

    public static readonly AttributeAmazonLexModelBuildingV2TestsetsApi LastUpdatedDateTime = new(
        "LastUpdatedDateTime");

    public TResult Match<TResult>(Func<TResult> onTestSetName,
        Func<TResult> onLastUpdatedDateTime,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TestSetName => onTestSetName(),
            _ when this == LastUpdatedDateTime => onLastUpdatedDateTime(),
            _ => otherwise(Value)
        };

    public void Match(Action onTestSetName, Action onLastUpdatedDateTime, Action<string> otherwise)
    {
        if (this == TestSetName) onTestSetName();
        else if (this == LastUpdatedDateTime) onLastUpdatedDateTime();
        else otherwise(Value);
    }
}
