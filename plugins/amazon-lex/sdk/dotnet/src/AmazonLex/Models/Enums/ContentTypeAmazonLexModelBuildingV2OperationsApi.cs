using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The content type of the response.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ContentTypeAmazonLexModelBuildingV2OperationsApi>))]
public sealed record ContentTypeAmazonLexModelBuildingV2OperationsApi : OpenStringEnum<ContentTypeAmazonLexModelBuildingV2OperationsApi>
{
    private ContentTypeAmazonLexModelBuildingV2OperationsApi(string value) : base(value)
    {
    }

    public static readonly ContentTypeAmazonLexModelBuildingV2OperationsApi ApplicationVndAmazonawsCardGeneric = new(
        "application/vnd.amazonaws.card.generic");

    public TResult Match<TResult>(Func<TResult> onApplicationVndAmazonawsCardGeneric,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ApplicationVndAmazonawsCardGeneric => onApplicationVndAmazonawsCardGeneric(),
            _ => otherwise(Value)
        };

    public void Match(Action onApplicationVndAmazonawsCardGeneric, Action<string> otherwise)
    {
        if (this == ApplicationVndAmazonawsCardGeneric) onApplicationVndAmazonawsCardGeneric();
        else otherwise(Value);
    }
}
