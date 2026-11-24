using System;
using System.Text.Json.Serialization;
using RelmCrm.Core.Enum;

namespace RelmCrm.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum SendEmail = new("send_email");

    public static readonly TypeEnum SendMessage = new("send_message");

    public static readonly TypeEnum CreateActivity = new("create_activity");

    public static readonly TypeEnum MoveDealStage = new("move_deal_stage");

    public static readonly TypeEnum SetField = new("set_field");

    public TResult Match<TResult>(Func<TResult> onSendEmail,
        Func<TResult> onSendMessage,
        Func<TResult> onCreateActivity,
        Func<TResult> onMoveDealStage,
        Func<TResult> onSetField,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SendEmail => onSendEmail(),
            _ when this == SendMessage => onSendMessage(),
            _ when this == CreateActivity => onCreateActivity(),
            _ when this == MoveDealStage => onMoveDealStage(),
            _ when this == SetField => onSetField(),
            _ => otherwise(Value)
        };

    public void Match(Action onSendEmail,
        Action onSendMessage,
        Action onCreateActivity,
        Action onMoveDealStage,
        Action onSetField,
        Action<string> otherwise)
    {
        if (this == SendEmail) onSendEmail();
        else if (this == SendMessage) onSendMessage();
        else if (this == CreateActivity) onCreateActivity();
        else if (this == MoveDealStage) onMoveDealStage();
        else if (this == SetField) onSetField();
        else otherwise(Value);
    }
}
