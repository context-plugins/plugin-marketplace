using System;
using System.Text.Json.Serialization;
using GoogleCloudTalentSolution.Core.Enum;

namespace GoogleCloudTalentSolution.Models.Enums;

/// <summary>
/// Required. The type of the event (see JobEventType).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type2>))]
public sealed record Type2 : OpenStringEnum<Type2>
{
    private Type2(string value) : base(value)
    {
    }

    public static readonly Type2 JobEventTypeUnspecified = new("JOB_EVENT_TYPE_UNSPECIFIED");

    public static readonly Type2 Impression = new("IMPRESSION");

    public static readonly Type2 View = new("VIEW");

    public static readonly Type2 ViewRedirect = new("VIEW_REDIRECT");

    public static readonly Type2 ApplicationStart = new("APPLICATION_START");

    public static readonly Type2 ApplicationFinish = new("APPLICATION_FINISH");

    public static readonly Type2 ApplicationQuickSubmission = new("APPLICATION_QUICK_SUBMISSION");

    public static readonly Type2 ApplicationRedirect = new("APPLICATION_REDIRECT");

    public static readonly Type2 ApplicationStartFromSearch = new("APPLICATION_START_FROM_SEARCH");

    public static readonly Type2 ApplicationRedirectFromSearch = new("APPLICATION_REDIRECT_FROM_SEARCH");

    public static readonly Type2 ApplicationCompanySubmit = new("APPLICATION_COMPANY_SUBMIT");

    public static readonly Type2 Bookmark = new("BOOKMARK");

    public static readonly Type2 Notification = new("NOTIFICATION");

    public static readonly Type2 Hired = new("HIRED");

    public static readonly Type2 SentCv = new("SENT_CV");

    public static readonly Type2 InterviewGranted = new("INTERVIEW_GRANTED");

    public TResult Match<TResult>(Func<TResult> onJobEventTypeUnspecified,
        Func<TResult> onImpression,
        Func<TResult> onView,
        Func<TResult> onViewRedirect,
        Func<TResult> onApplicationStart,
        Func<TResult> onApplicationFinish,
        Func<TResult> onApplicationQuickSubmission,
        Func<TResult> onApplicationRedirect,
        Func<TResult> onApplicationStartFromSearch,
        Func<TResult> onApplicationRedirectFromSearch,
        Func<TResult> onApplicationCompanySubmit,
        Func<TResult> onBookmark,
        Func<TResult> onNotification,
        Func<TResult> onHired,
        Func<TResult> onSentCv,
        Func<TResult> onInterviewGranted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == JobEventTypeUnspecified => onJobEventTypeUnspecified(),
            _ when this == Impression => onImpression(),
            _ when this == View => onView(),
            _ when this == ViewRedirect => onViewRedirect(),
            _ when this == ApplicationStart => onApplicationStart(),
            _ when this == ApplicationFinish => onApplicationFinish(),
            _ when this == ApplicationQuickSubmission => onApplicationQuickSubmission(),
            _ when this == ApplicationRedirect => onApplicationRedirect(),
            _ when this == ApplicationStartFromSearch => onApplicationStartFromSearch(),
            _ when this == ApplicationRedirectFromSearch => onApplicationRedirectFromSearch(),
            _ when this == ApplicationCompanySubmit => onApplicationCompanySubmit(),
            _ when this == Bookmark => onBookmark(),
            _ when this == Notification => onNotification(),
            _ when this == Hired => onHired(),
            _ when this == SentCv => onSentCv(),
            _ when this == InterviewGranted => onInterviewGranted(),
            _ => otherwise(Value)
        };

    public void Match(Action onJobEventTypeUnspecified,
        Action onImpression,
        Action onView,
        Action onViewRedirect,
        Action onApplicationStart,
        Action onApplicationFinish,
        Action onApplicationQuickSubmission,
        Action onApplicationRedirect,
        Action onApplicationStartFromSearch,
        Action onApplicationRedirectFromSearch,
        Action onApplicationCompanySubmit,
        Action onBookmark,
        Action onNotification,
        Action onHired,
        Action onSentCv,
        Action onInterviewGranted,
        Action<string> otherwise)
    {
        if (this == JobEventTypeUnspecified) onJobEventTypeUnspecified();
        else if (this == Impression) onImpression();
        else if (this == View) onView();
        else if (this == ViewRedirect) onViewRedirect();
        else if (this == ApplicationStart) onApplicationStart();
        else if (this == ApplicationFinish) onApplicationFinish();
        else if (this == ApplicationQuickSubmission) onApplicationQuickSubmission();
        else if (this == ApplicationRedirect) onApplicationRedirect();
        else if (this == ApplicationStartFromSearch) onApplicationStartFromSearch();
        else if (this == ApplicationRedirectFromSearch) onApplicationRedirectFromSearch();
        else if (this == ApplicationCompanySubmit) onApplicationCompanySubmit();
        else if (this == Bookmark) onBookmark();
        else if (this == Notification) onNotification();
        else if (this == Hired) onHired();
        else if (this == SentCv) onSentCv();
        else if (this == InterviewGranted) onInterviewGranted();
        else otherwise(Value);
    }
}
