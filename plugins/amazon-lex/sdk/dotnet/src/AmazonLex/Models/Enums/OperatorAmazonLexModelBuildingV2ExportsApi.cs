using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The operator to use for the filter. Specify EQ when the ListExports operation should return only resource types that equal the specified value. Specify CO when the ListExports operation should return resource types that contain the specified value.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<OperatorAmazonLexModelBuildingV2ExportsApi>))]
public sealed record OperatorAmazonLexModelBuildingV2ExportsApi : OpenStringEnum<OperatorAmazonLexModelBuildingV2ExportsApi>
{
    private OperatorAmazonLexModelBuildingV2ExportsApi(string value) : base(value)
    {
    }

    public static readonly OperatorAmazonLexModelBuildingV2ExportsApi Co = new("CO");

    public static readonly OperatorAmazonLexModelBuildingV2ExportsApi Eq = new("EQ");

    public TResult Match<TResult>(Func<TResult> onCo, Func<TResult> onEq, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Co => onCo(),
            _ when this == Eq => onEq(),
            _ => otherwise(Value)
        };

    public void Match(Action onCo, Action onEq, Action<string> otherwise)
    {
        if (this == Co) onCo();
        else if (this == Eq) onEq();
        else otherwise(Value);
    }
}
