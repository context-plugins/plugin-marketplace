using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

/// <summary>
/// A system HUD imports environments and runs from.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ExternalSystem>))]
public sealed record ExternalSystem : OpenStringEnum<ExternalSystem>
{
    private ExternalSystem(string value) : base(value)
    {
    }

    public static readonly ExternalSystem Harbor = new("harbor");

    public TResult Match<TResult>(Func<TResult> onHarbor, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Harbor => onHarbor(),
            _ => otherwise(Value)
        };

    public void Match(Action onHarbor, Action<string> otherwise)
    {
        if (this == Harbor) onHarbor();
        else otherwise(Value);
    }
}
