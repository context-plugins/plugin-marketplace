using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Template>))]
public sealed record Template : OpenStringEnum<Template>
{
    private Template(string value) : base(value)
    {
    }

    public static readonly Template Component = new("component");

    public static readonly Template Statussheet = new("statussheet");

    public TResult Match<TResult>(Func<TResult> onComponent,
        Func<TResult> onStatussheet,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Component => onComponent(),
            _ when this == Statussheet => onStatussheet(),
            _ => otherwise(Value)
        };

    public void Match(Action onComponent, Action onStatussheet, Action<string> otherwise)
    {
        if (this == Component) onComponent();
        else if (this == Statussheet) onStatussheet();
        else otherwise(Value);
    }
}
