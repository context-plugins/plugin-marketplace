using System;
using System.Text.Json.Serialization;
using Givebutter.Core.Enum;

namespace Givebutter.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TypeGivebutterApiDocumentationContactActivitiesApi>))]
public sealed record TypeGivebutterApiDocumentationContactActivitiesApi : OpenStringEnum<TypeGivebutterApiDocumentationContactActivitiesApi>
{
    private TypeGivebutterApiDocumentationContactActivitiesApi(string value) : base(value)
    {
    }

    public static readonly TypeGivebutterApiDocumentationContactActivitiesApi Email = new("email");

    public static readonly TypeGivebutterApiDocumentationContactActivitiesApi Meeting = new("meeting");

    public static readonly TypeGivebutterApiDocumentationContactActivitiesApi Note = new("note");

    public static readonly TypeGivebutterApiDocumentationContactActivitiesApi PhoneCall = new("phone_call");

    public static readonly TypeGivebutterApiDocumentationContactActivitiesApi Sms = new("sms");

    public static readonly TypeGivebutterApiDocumentationContactActivitiesApi CompletedTask = new("completed_task");

    public static readonly TypeGivebutterApiDocumentationContactActivitiesApi VolunteerActivity = new(
        "volunteer_activity");

    public TResult Match<TResult>(Func<TResult> onEmail,
        Func<TResult> onMeeting,
        Func<TResult> onNote,
        Func<TResult> onPhoneCall,
        Func<TResult> onSms,
        Func<TResult> onCompletedTask,
        Func<TResult> onVolunteerActivity,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Email => onEmail(),
            _ when this == Meeting => onMeeting(),
            _ when this == Note => onNote(),
            _ when this == PhoneCall => onPhoneCall(),
            _ when this == Sms => onSms(),
            _ when this == CompletedTask => onCompletedTask(),
            _ when this == VolunteerActivity => onVolunteerActivity(),
            _ => otherwise(Value)
        };

    public void Match(Action onEmail,
        Action onMeeting,
        Action onNote,
        Action onPhoneCall,
        Action onSms,
        Action onCompletedTask,
        Action onVolunteerActivity,
        Action<string> otherwise)
    {
        if (this == Email) onEmail();
        else if (this == Meeting) onMeeting();
        else if (this == Note) onNote();
        else if (this == PhoneCall) onPhoneCall();
        else if (this == Sms) onSms();
        else if (this == CompletedTask) onCompletedTask();
        else if (this == VolunteerActivity) onVolunteerActivity();
        else otherwise(Value);
    }
}
