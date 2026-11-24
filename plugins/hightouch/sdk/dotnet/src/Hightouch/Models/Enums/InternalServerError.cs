using System;
using System.Text.Json.Serialization;
using Hightouch.Core.Enum;

namespace Hightouch.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<InternalServerError>))]
public sealed record InternalServerError : OpenStringEnum<InternalServerError>
{
    private InternalServerError(string value) : base(value)
    {
    }

    public static readonly InternalServerError InternalServerErrorMember = new("Internal Server Error");

    public TResult Match<TResult>(Func<TResult> onInternalServerErrorMember, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == InternalServerErrorMember => onInternalServerErrorMember(),
            _ => otherwise(Value)
        };

    public void Match(Action onInternalServerErrorMember, Action<string> otherwise)
    {
        if (this == InternalServerErrorMember) onInternalServerErrorMember();
        else otherwise(Value);
    }
}
