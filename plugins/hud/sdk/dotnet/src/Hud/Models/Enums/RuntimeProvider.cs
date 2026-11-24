using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<RuntimeProvider>))]
public sealed record RuntimeProvider : OpenStringEnum<RuntimeProvider>
{
    private RuntimeProvider(string value) : base(value)
    {
    }

    public static readonly RuntimeProvider Hud = new("hud");

    public static readonly RuntimeProvider Modal = new("modal");

    public TResult Match<TResult>(Func<TResult> onHud, Func<TResult> onModal, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Hud => onHud(),
            _ when this == Modal => onModal(),
            _ => otherwise(Value)
        };

    public void Match(Action onHud, Action onModal, Action<string> otherwise)
    {
        if (this == Hud) onHud();
        else if (this == Modal) onModal();
        else otherwise(Value);
    }
}
