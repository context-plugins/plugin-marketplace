using System;
using System.Text.Json.Serialization;
using Surfe.Core.Enum;

namespace Surfe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<AcceptedEmailType>))]
public sealed record AcceptedEmailType : OpenStringEnum<AcceptedEmailType>
{
    private AcceptedEmailType(string value) : base(value)
    {
    }

    public static readonly AcceptedEmailType Professional = new("professional");

    public static readonly AcceptedEmailType Personal = new("personal");

    public TResult Match<TResult>(Func<TResult> onProfessional,
        Func<TResult> onPersonal,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Professional => onProfessional(),
            _ when this == Personal => onPersonal(),
            _ => otherwise(Value)
        };

    public void Match(Action onProfessional, Action onPersonal, Action<string> otherwise)
    {
        if (this == Professional) onProfessional();
        else if (this == Personal) onPersonal();
        else otherwise(Value);
    }
}
