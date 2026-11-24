using System;
using System.Text.Json.Serialization;
using Givebutter.Core.Enum;

namespace Givebutter.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ResourceType>))]
public sealed record ResourceType : OpenStringEnum<ResourceType>
{
    private ResourceType(string value) : base(value)
    {
    }

    public static readonly ResourceType Transaction = new("transaction");

    public static readonly ResourceType Plan = new("plan");

    public static readonly ResourceType Ticket = new("ticket");

    public static readonly ResourceType Message = new("message");

    public static readonly ResourceType MailPiece = new("mail_piece");

    public static readonly ResourceType SoftCredit = new("soft_credit");

    public static readonly ResourceType SubscriptionLog = new("subscription_log");

    public TResult Match<TResult>(Func<TResult> onTransaction,
        Func<TResult> onPlan,
        Func<TResult> onTicket,
        Func<TResult> onMessage,
        Func<TResult> onMailPiece,
        Func<TResult> onSoftCredit,
        Func<TResult> onSubscriptionLog,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Transaction => onTransaction(),
            _ when this == Plan => onPlan(),
            _ when this == Ticket => onTicket(),
            _ when this == Message => onMessage(),
            _ when this == MailPiece => onMailPiece(),
            _ when this == SoftCredit => onSoftCredit(),
            _ when this == SubscriptionLog => onSubscriptionLog(),
            _ => otherwise(Value)
        };

    public void Match(Action onTransaction,
        Action onPlan,
        Action onTicket,
        Action onMessage,
        Action onMailPiece,
        Action onSoftCredit,
        Action onSubscriptionLog,
        Action<string> otherwise)
    {
        if (this == Transaction) onTransaction();
        else if (this == Plan) onPlan();
        else if (this == Ticket) onTicket();
        else if (this == Message) onMessage();
        else if (this == MailPiece) onMailPiece();
        else if (this == SoftCredit) onSoftCredit();
        else if (this == SubscriptionLog) onSubscriptionLog();
        else otherwise(Value);
    }
}
