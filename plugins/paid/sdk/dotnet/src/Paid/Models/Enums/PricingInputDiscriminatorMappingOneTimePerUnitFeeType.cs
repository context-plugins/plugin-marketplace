using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PricingInputDiscriminatorMappingOneTimePerUnitFeeType>))]
public sealed record PricingInputDiscriminatorMappingOneTimePerUnitFeeType : OpenStringEnum<PricingInputDiscriminatorMappingOneTimePerUnitFeeType>
{
    private PricingInputDiscriminatorMappingOneTimePerUnitFeeType(string value) : base(value)
    {
    }

    public static readonly PricingInputDiscriminatorMappingOneTimePerUnitFeeType Setup = new("setup");

    public static readonly PricingInputDiscriminatorMappingOneTimePerUnitFeeType Onboarding = new("onboarding");

    public static readonly PricingInputDiscriminatorMappingOneTimePerUnitFeeType Implementation = new("implementation");

    public static readonly PricingInputDiscriminatorMappingOneTimePerUnitFeeType Migration = new("migration");

    public static readonly PricingInputDiscriminatorMappingOneTimePerUnitFeeType Custom = new("custom");

    public TResult Match<TResult>(Func<TResult> onSetup,
        Func<TResult> onOnboarding,
        Func<TResult> onImplementation,
        Func<TResult> onMigration,
        Func<TResult> onCustom,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Setup => onSetup(),
            _ when this == Onboarding => onOnboarding(),
            _ when this == Implementation => onImplementation(),
            _ when this == Migration => onMigration(),
            _ when this == Custom => onCustom(),
            _ => otherwise(Value)
        };

    public void Match(Action onSetup,
        Action onOnboarding,
        Action onImplementation,
        Action onMigration,
        Action onCustom,
        Action<string> otherwise)
    {
        if (this == Setup) onSetup();
        else if (this == Onboarding) onOnboarding();
        else if (this == Implementation) onImplementation();
        else if (this == Migration) onMigration();
        else if (this == Custom) onCustom();
        else otherwise(Value);
    }
}
