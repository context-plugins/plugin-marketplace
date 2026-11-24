using System;
using System.Text.Json.Serialization;
using Sapling.Core.Enum;

namespace Sapling.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Category>))]
public sealed record Category : OpenStringEnum<Category>
{
    private Category(string value) : base(value)
    {
    }

    public static readonly Category Gender = new("gender");

    public static readonly Category RaceEthnicity = new("race_ethnicity");

    public static readonly Category Disability = new("disability");

    public static readonly Category Age = new("age");

    public static readonly Category Lgbtq = new("lgbtq");

    public static readonly Category Religion = new("religion");

    public static readonly Category Socioeconomic = new("socioeconomic");

    public static readonly Category Appearance = new("appearance");

    public TResult Match<TResult>(Func<TResult> onGender,
        Func<TResult> onRaceEthnicity,
        Func<TResult> onDisability,
        Func<TResult> onAge,
        Func<TResult> onLgbtq,
        Func<TResult> onReligion,
        Func<TResult> onSocioeconomic,
        Func<TResult> onAppearance,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Gender => onGender(),
            _ when this == RaceEthnicity => onRaceEthnicity(),
            _ when this == Disability => onDisability(),
            _ when this == Age => onAge(),
            _ when this == Lgbtq => onLgbtq(),
            _ when this == Religion => onReligion(),
            _ when this == Socioeconomic => onSocioeconomic(),
            _ when this == Appearance => onAppearance(),
            _ => otherwise(Value)
        };

    public void Match(Action onGender,
        Action onRaceEthnicity,
        Action onDisability,
        Action onAge,
        Action onLgbtq,
        Action onReligion,
        Action onSocioeconomic,
        Action onAppearance,
        Action<string> otherwise)
    {
        if (this == Gender) onGender();
        else if (this == RaceEthnicity) onRaceEthnicity();
        else if (this == Disability) onDisability();
        else if (this == Age) onAge();
        else if (this == Lgbtq) onLgbtq();
        else if (this == Religion) onReligion();
        else if (this == Socioeconomic) onSocioeconomic();
        else if (this == Appearance) onAppearance();
        else otherwise(Value);
    }
}
