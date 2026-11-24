using System;
using System.Text.Json.Serialization;
using GoogleCloudTalentSolution.Core.Enum;

namespace GoogleCloudTalentSolution.Models.Enums;

/// <summary>
/// Allows the client to return jobs without a set location, specifically, telecommuting jobs (telecommuting is considered by the service as a special location). Job.posting_region indicates if a job permits telecommuting. If this field is set to TelecommutePreference.TELECOMMUTE_ALLOWED, telecommuting jobs are searched, and address and lat_lng are ignored. If not set or set to TelecommutePreference.TELECOMMUTE_EXCLUDED, the telecommute status of the jobs is ignored. Jobs that have PostingRegion.TELECOMMUTE and have additional Job.addresses may still be matched based on other location filters using address or lat_lng. This filter can be used by itself to search exclusively for telecommuting jobs, or it can be combined with another location filter to search for a combination of job locations, such as "Mountain View" or "telecommuting" jobs. However, when used in combination with other location filters, telecommuting jobs can be treated as less relevant than other jobs in the search response. This field is only used for job search requests.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TelecommutePreference>))]
public sealed record TelecommutePreference : OpenStringEnum<TelecommutePreference>
{
    private TelecommutePreference(string value) : base(value)
    {
    }

    public static readonly TelecommutePreference TelecommutePreferenceUnspecified = new(
        "TELECOMMUTE_PREFERENCE_UNSPECIFIED");

    public static readonly TelecommutePreference TelecommuteExcluded = new("TELECOMMUTE_EXCLUDED");

    public static readonly TelecommutePreference TelecommuteAllowed = new("TELECOMMUTE_ALLOWED");

    public static readonly TelecommutePreference TelecommuteJobsExcluded = new("TELECOMMUTE_JOBS_EXCLUDED");

    public TResult Match<TResult>(Func<TResult> onTelecommutePreferenceUnspecified,
        Func<TResult> onTelecommuteExcluded,
        Func<TResult> onTelecommuteAllowed,
        Func<TResult> onTelecommuteJobsExcluded,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TelecommutePreferenceUnspecified => onTelecommutePreferenceUnspecified(),
            _ when this == TelecommuteExcluded => onTelecommuteExcluded(),
            _ when this == TelecommuteAllowed => onTelecommuteAllowed(),
            _ when this == TelecommuteJobsExcluded => onTelecommuteJobsExcluded(),
            _ => otherwise(Value)
        };

    public void Match(Action onTelecommutePreferenceUnspecified,
        Action onTelecommuteExcluded,
        Action onTelecommuteAllowed,
        Action onTelecommuteJobsExcluded,
        Action<string> otherwise)
    {
        if (this == TelecommutePreferenceUnspecified) onTelecommutePreferenceUnspecified();
        else if (this == TelecommuteExcluded) onTelecommuteExcluded();
        else if (this == TelecommuteAllowed) onTelecommuteAllowed();
        else if (this == TelecommuteJobsExcluded) onTelecommuteJobsExcluded();
        else otherwise(Value);
    }
}
