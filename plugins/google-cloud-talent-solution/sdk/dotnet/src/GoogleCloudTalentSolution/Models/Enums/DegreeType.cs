using System;
using System.Text.Json.Serialization;
using GoogleCloudTalentSolution.Core.Enum;

namespace GoogleCloudTalentSolution.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<DegreeType>))]
public sealed record DegreeType : OpenStringEnum<DegreeType>
{
    private DegreeType(string value) : base(value)
    {
    }

    public static readonly DegreeType DegreeTypeUnspecified = new("DEGREE_TYPE_UNSPECIFIED");

    public static readonly DegreeType PrimaryEducation = new("PRIMARY_EDUCATION");

    public static readonly DegreeType LowerSecondaryEducation = new("LOWER_SECONDARY_EDUCATION");

    public static readonly DegreeType UpperSecondaryEducation = new("UPPER_SECONDARY_EDUCATION");

    public static readonly DegreeType AdultRemedialEducation = new("ADULT_REMEDIAL_EDUCATION");

    public static readonly DegreeType AssociatesOrEquivalent = new("ASSOCIATES_OR_EQUIVALENT");

    public static readonly DegreeType BachelorsOrEquivalent = new("BACHELORS_OR_EQUIVALENT");

    public static readonly DegreeType MastersOrEquivalent = new("MASTERS_OR_EQUIVALENT");

    public static readonly DegreeType DoctoralOrEquivalent = new("DOCTORAL_OR_EQUIVALENT");

    public TResult Match<TResult>(Func<TResult> onDegreeTypeUnspecified,
        Func<TResult> onPrimaryEducation,
        Func<TResult> onLowerSecondaryEducation,
        Func<TResult> onUpperSecondaryEducation,
        Func<TResult> onAdultRemedialEducation,
        Func<TResult> onAssociatesOrEquivalent,
        Func<TResult> onBachelorsOrEquivalent,
        Func<TResult> onMastersOrEquivalent,
        Func<TResult> onDoctoralOrEquivalent,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DegreeTypeUnspecified => onDegreeTypeUnspecified(),
            _ when this == PrimaryEducation => onPrimaryEducation(),
            _ when this == LowerSecondaryEducation => onLowerSecondaryEducation(),
            _ when this == UpperSecondaryEducation => onUpperSecondaryEducation(),
            _ when this == AdultRemedialEducation => onAdultRemedialEducation(),
            _ when this == AssociatesOrEquivalent => onAssociatesOrEquivalent(),
            _ when this == BachelorsOrEquivalent => onBachelorsOrEquivalent(),
            _ when this == MastersOrEquivalent => onMastersOrEquivalent(),
            _ when this == DoctoralOrEquivalent => onDoctoralOrEquivalent(),
            _ => otherwise(Value)
        };

    public void Match(Action onDegreeTypeUnspecified,
        Action onPrimaryEducation,
        Action onLowerSecondaryEducation,
        Action onUpperSecondaryEducation,
        Action onAdultRemedialEducation,
        Action onAssociatesOrEquivalent,
        Action onBachelorsOrEquivalent,
        Action onMastersOrEquivalent,
        Action onDoctoralOrEquivalent,
        Action<string> otherwise)
    {
        if (this == DegreeTypeUnspecified) onDegreeTypeUnspecified();
        else if (this == PrimaryEducation) onPrimaryEducation();
        else if (this == LowerSecondaryEducation) onLowerSecondaryEducation();
        else if (this == UpperSecondaryEducation) onUpperSecondaryEducation();
        else if (this == AdultRemedialEducation) onAdultRemedialEducation();
        else if (this == AssociatesOrEquivalent) onAssociatesOrEquivalent();
        else if (this == BachelorsOrEquivalent) onBachelorsOrEquivalent();
        else if (this == MastersOrEquivalent) onMastersOrEquivalent();
        else if (this == DoctoralOrEquivalent) onDoctoralOrEquivalent();
        else otherwise(Value);
    }
}
