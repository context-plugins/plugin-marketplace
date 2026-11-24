using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// Specifies whether to sort the test set executions by the date and time at which the test sets were created.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AttributeAmazonLexModelBuildingV2TestexecutionsApi>))]
public sealed record AttributeAmazonLexModelBuildingV2TestexecutionsApi : OpenStringEnum<AttributeAmazonLexModelBuildingV2TestexecutionsApi>
{
    private AttributeAmazonLexModelBuildingV2TestexecutionsApi(string value) : base(value)
    {
    }

    public static readonly AttributeAmazonLexModelBuildingV2TestexecutionsApi TestSetName = new("TestSetName");

    public static readonly AttributeAmazonLexModelBuildingV2TestexecutionsApi CreationDateTime = new(
        "CreationDateTime");

    public TResult Match<TResult>(Func<TResult> onTestSetName,
        Func<TResult> onCreationDateTime,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TestSetName => onTestSetName(),
            _ when this == CreationDateTime => onCreationDateTime(),
            _ => otherwise(Value)
        };

    public void Match(Action onTestSetName, Action onCreationDateTime, Action<string> otherwise)
    {
        if (this == TestSetName) onTestSetName();
        else if (this == CreationDateTime) onCreationDateTime();
        else otherwise(Value);
    }
}
