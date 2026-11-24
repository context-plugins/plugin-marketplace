using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusBundleSocialUploadApi>))]
public sealed record StatusBundleSocialUploadApi : OpenStringEnum<StatusBundleSocialUploadApi>
{
    private StatusBundleSocialUploadApi(string value) : base(value)
    {
    }

    public static readonly StatusBundleSocialUploadApi Used = new("USED");

    public static readonly StatusBundleSocialUploadApi Unused = new("UNUSED");

    public TResult Match<TResult>(Func<TResult> onUsed, Func<TResult> onUnused, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Used => onUsed(),
            _ when this == Unused => onUnused(),
            _ => otherwise(Value)
        };

    public void Match(Action onUsed, Action onUnused, Action<string> otherwise)
    {
        if (this == Used) onUsed();
        else if (this == Unused) onUnused();
        else otherwise(Value);
    }
}
