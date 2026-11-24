using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Code>))]
public sealed record Code : OpenStringEnum<Code>
{
    private Code(string value) : base(value)
    {
    }

    public static readonly Code InvalidType = new("invalid_type");

    public static readonly Code InvalidLiteral = new("invalid_literal");

    public static readonly Code Custom = new("custom");

    public static readonly Code InvalidUnion = new("invalid_union");

    public static readonly Code InvalidUnionDiscriminator = new("invalid_union_discriminator");

    public static readonly Code InvalidEnumValue = new("invalid_enum_value");

    public static readonly Code UnrecognizedKeys = new("unrecognized_keys");

    public static readonly Code InvalidArguments = new("invalid_arguments");

    public static readonly Code InvalidReturnType = new("invalid_return_type");

    public static readonly Code InvalidDate = new("invalid_date");

    public static readonly Code InvalidString = new("invalid_string");

    public static readonly Code TooSmall = new("too_small");

    public static readonly Code TooBig = new("too_big");

    public static readonly Code InvalidIntersectionTypes = new("invalid_intersection_types");

    public static readonly Code NotMultipleOf = new("not_multiple_of");

    public static readonly Code NotFinite = new("not_finite");

    public TResult Match<TResult>(Func<TResult> onInvalidType,
        Func<TResult> onInvalidLiteral,
        Func<TResult> onCustom,
        Func<TResult> onInvalidUnion,
        Func<TResult> onInvalidUnionDiscriminator,
        Func<TResult> onInvalidEnumValue,
        Func<TResult> onUnrecognizedKeys,
        Func<TResult> onInvalidArguments,
        Func<TResult> onInvalidReturnType,
        Func<TResult> onInvalidDate,
        Func<TResult> onInvalidString,
        Func<TResult> onTooSmall,
        Func<TResult> onTooBig,
        Func<TResult> onInvalidIntersectionTypes,
        Func<TResult> onNotMultipleOf,
        Func<TResult> onNotFinite,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == InvalidType => onInvalidType(),
            _ when this == InvalidLiteral => onInvalidLiteral(),
            _ when this == Custom => onCustom(),
            _ when this == InvalidUnion => onInvalidUnion(),
            _ when this == InvalidUnionDiscriminator => onInvalidUnionDiscriminator(),
            _ when this == InvalidEnumValue => onInvalidEnumValue(),
            _ when this == UnrecognizedKeys => onUnrecognizedKeys(),
            _ when this == InvalidArguments => onInvalidArguments(),
            _ when this == InvalidReturnType => onInvalidReturnType(),
            _ when this == InvalidDate => onInvalidDate(),
            _ when this == InvalidString => onInvalidString(),
            _ when this == TooSmall => onTooSmall(),
            _ when this == TooBig => onTooBig(),
            _ when this == InvalidIntersectionTypes => onInvalidIntersectionTypes(),
            _ when this == NotMultipleOf => onNotMultipleOf(),
            _ when this == NotFinite => onNotFinite(),
            _ => otherwise(Value)
        };

    public void Match(Action onInvalidType,
        Action onInvalidLiteral,
        Action onCustom,
        Action onInvalidUnion,
        Action onInvalidUnionDiscriminator,
        Action onInvalidEnumValue,
        Action onUnrecognizedKeys,
        Action onInvalidArguments,
        Action onInvalidReturnType,
        Action onInvalidDate,
        Action onInvalidString,
        Action onTooSmall,
        Action onTooBig,
        Action onInvalidIntersectionTypes,
        Action onNotMultipleOf,
        Action onNotFinite,
        Action<string> otherwise)
    {
        if (this == InvalidType) onInvalidType();
        else if (this == InvalidLiteral) onInvalidLiteral();
        else if (this == Custom) onCustom();
        else if (this == InvalidUnion) onInvalidUnion();
        else if (this == InvalidUnionDiscriminator) onInvalidUnionDiscriminator();
        else if (this == InvalidEnumValue) onInvalidEnumValue();
        else if (this == UnrecognizedKeys) onUnrecognizedKeys();
        else if (this == InvalidArguments) onInvalidArguments();
        else if (this == InvalidReturnType) onInvalidReturnType();
        else if (this == InvalidDate) onInvalidDate();
        else if (this == InvalidString) onInvalidString();
        else if (this == TooSmall) onTooSmall();
        else if (this == TooBig) onTooBig();
        else if (this == InvalidIntersectionTypes) onInvalidIntersectionTypes();
        else if (this == NotMultipleOf) onNotMultipleOf();
        else if (this == NotFinite) onNotFinite();
        else otherwise(Value);
    }
}
