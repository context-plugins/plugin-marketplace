using System;
using System.Text.Json.Serialization;
using AmazonAppSync.Core.Enum;

namespace AmazonAppSync.Models.Enums;

/// <summary>
/// The cache instance type. Valid values are SMALL MEDIUM LARGE XLARGE LARGE_2X LARGE_4X LARGE_8X (not available in all regions) LARGE_12X Historically, instance types were identified by an EC2-style value. As of July 2020, this is deprecated, and the generic identifiers above should be used. The following legacy instance types are available, but their use is discouraged: T2_SMALL: A t2.small instance type. T2_MEDIUM: A t2.medium instance type. R4_LARGE: A r4.large instance type. R4_XLARGE: A r4.xlarge instance type. R4_2XLARGE: A r4.2xlarge instance type. R4_4XLARGE: A r4.4xlarge instance type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum T2Small = new("T2_SMALL");

    public static readonly TypeEnum T2Medium = new("T2_MEDIUM");

    public static readonly TypeEnum R4Large = new("R4_LARGE");

    public static readonly TypeEnum R4Xlarge = new("R4_XLARGE");

    public static readonly TypeEnum R42Xlarge = new("R4_2XLARGE");

    public static readonly TypeEnum R44Xlarge = new("R4_4XLARGE");

    public static readonly TypeEnum R48Xlarge = new("R4_8XLARGE");

    public static readonly TypeEnum Small = new("SMALL");

    public static readonly TypeEnum Medium = new("MEDIUM");

    public static readonly TypeEnum Large = new("LARGE");

    public static readonly TypeEnum Xlarge = new("XLARGE");

    public static readonly TypeEnum Large2X = new("LARGE_2X");

    public static readonly TypeEnum Large4X = new("LARGE_4X");

    public static readonly TypeEnum Large8X = new("LARGE_8X");

    public static readonly TypeEnum Large12X = new("LARGE_12X");

    public TResult Match<TResult>(Func<TResult> onT2Small,
        Func<TResult> onT2Medium,
        Func<TResult> onR4Large,
        Func<TResult> onR4Xlarge,
        Func<TResult> onR42Xlarge,
        Func<TResult> onR44Xlarge,
        Func<TResult> onR48Xlarge,
        Func<TResult> onSmall,
        Func<TResult> onMedium,
        Func<TResult> onLarge,
        Func<TResult> onXlarge,
        Func<TResult> onLarge2X,
        Func<TResult> onLarge4X,
        Func<TResult> onLarge8X,
        Func<TResult> onLarge12X,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == T2Small => onT2Small(),
            _ when this == T2Medium => onT2Medium(),
            _ when this == R4Large => onR4Large(),
            _ when this == R4Xlarge => onR4Xlarge(),
            _ when this == R42Xlarge => onR42Xlarge(),
            _ when this == R44Xlarge => onR44Xlarge(),
            _ when this == R48Xlarge => onR48Xlarge(),
            _ when this == Small => onSmall(),
            _ when this == Medium => onMedium(),
            _ when this == Large => onLarge(),
            _ when this == Xlarge => onXlarge(),
            _ when this == Large2X => onLarge2X(),
            _ when this == Large4X => onLarge4X(),
            _ when this == Large8X => onLarge8X(),
            _ when this == Large12X => onLarge12X(),
            _ => otherwise(Value)
        };

    public void Match(Action onT2Small,
        Action onT2Medium,
        Action onR4Large,
        Action onR4Xlarge,
        Action onR42Xlarge,
        Action onR44Xlarge,
        Action onR48Xlarge,
        Action onSmall,
        Action onMedium,
        Action onLarge,
        Action onXlarge,
        Action onLarge2X,
        Action onLarge4X,
        Action onLarge8X,
        Action onLarge12X,
        Action<string> otherwise)
    {
        if (this == T2Small) onT2Small();
        else if (this == T2Medium) onT2Medium();
        else if (this == R4Large) onR4Large();
        else if (this == R4Xlarge) onR4Xlarge();
        else if (this == R42Xlarge) onR42Xlarge();
        else if (this == R44Xlarge) onR44Xlarge();
        else if (this == R48Xlarge) onR48Xlarge();
        else if (this == Small) onSmall();
        else if (this == Medium) onMedium();
        else if (this == Large) onLarge();
        else if (this == Xlarge) onXlarge();
        else if (this == Large2X) onLarge2X();
        else if (this == Large4X) onLarge4X();
        else if (this == Large8X) onLarge8X();
        else if (this == Large12X) onLarge12X();
        else otherwise(Value);
    }
}
