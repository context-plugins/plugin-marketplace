using System;
using System.Text.Json.Serialization;
using Archbee.Core.Enum;

namespace Archbee.Models.Enums;

/// <summary>
/// Response Status
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusArchbeePublicFileManagerApi>))]
public sealed record StatusArchbeePublicFileManagerApi : OpenStringEnum<StatusArchbeePublicFileManagerApi>
{
    private StatusArchbeePublicFileManagerApi(string value) : base(value)
    {
    }

    public static readonly StatusArchbeePublicFileManagerApi Ok = new("OK");

    public static readonly StatusArchbeePublicFileManagerApi NotOk = new("Not OK");

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
