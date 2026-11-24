using System;
using System.Text.Json.Serialization;
using Archbee.Core.Enum;

namespace Archbee.Models.Enums;

/// <summary>
/// Response Status
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status1ArchbeePublicApiReferenceApi>))]
public sealed record Status1ArchbeePublicApiReferenceApi : OpenStringEnum<Status1ArchbeePublicApiReferenceApi>
{
    private Status1ArchbeePublicApiReferenceApi(string value) : base(value)
    {
    }

    public static readonly Status1ArchbeePublicApiReferenceApi Ok = new("OK");

    public static readonly Status1ArchbeePublicApiReferenceApi NotOk = new("Not OK");

    public TResult Match<TResult>(Func<TResult> onOk, Func<TResult> onNotOk, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Ok => onOk(),
            _ when this == NotOk => onNotOk(),
            _ => otherwise(Value)
        };

    public void Match(Action onOk, Action onNotOk, Action<string> otherwise)
    {
        if (this == Ok) onOk();
        else if (this == NotOk) onNotOk();
        else otherwise(Value);
    }
}
