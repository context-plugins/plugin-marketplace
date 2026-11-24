using System;
using System.Text.Json.Serialization;
using GoogleCloudTasks.Core.Enum;

namespace GoogleCloudTasks.Models.Enums;

/// <summary>
/// The response_view specifies which subset of the Task will be returned. By default response_view is BASIC; not all information is retrieved by default because some data, such as payloads, might be desirable to return only when needed because of its large size or because of the sensitivity of data that it contains. Authorization for FULL requires <c>cloudtasks.tasks.fullView</c> <see href="https://cloud.google.com/iam/">Google IAM</see> permission on the Task resource.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ResponseView>))]
public sealed record ResponseView : OpenStringEnum<ResponseView>
{
    private ResponseView(string value) : base(value)
    {
    }

    public static readonly ResponseView ViewUnspecified = new("VIEW_UNSPECIFIED");

    public static readonly ResponseView Basic = new("BASIC");

    public static readonly ResponseView Full = new("FULL");

    public TResult Match<TResult>(Func<TResult> onViewUnspecified,
        Func<TResult> onBasic,
        Func<TResult> onFull,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ViewUnspecified => onViewUnspecified(),
            _ when this == Basic => onBasic(),
            _ when this == Full => onFull(),
            _ => otherwise(Value)
        };

    public void Match(Action onViewUnspecified, Action onBasic, Action onFull, Action<string> otherwise)
    {
        if (this == ViewUnspecified) onViewUnspecified();
        else if (this == Basic) onBasic();
        else if (this == Full) onFull();
        else otherwise(Value);
    }
}
